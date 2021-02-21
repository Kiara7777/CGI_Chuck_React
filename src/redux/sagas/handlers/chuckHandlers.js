import {all, call, put, cancelled} from "redux-saga/effects";
import {getData, getDataTest} from "../requests/chuckRquests";
import {clearError, setCategories, setChuck, setError, setLoading} from "../../actions";
import {random} from "../../../helpFunctions";
import axios from "axios";


/**
 * Soubor s hlavnimi generatorz z redux-saga
 * */

/**
 * Pomocna funkce na formatovani error zpravy z error objectu
 * */
const getErrorData = errorApi => {
    const {data} = errorApi.response;
    const {error, message, status} = data;
    return `${status}: ${error}: ${message}`;
}

/**
 * Generator pro zakladni ziskani dat - cela adresa requestu je urcena v action objektu
 * ve vlastnosti apiCall, pouziva se pro:
 * 1. ziskani nahodneho vtipu pri nacteni aplikace
 * 2. ziskani vsech kategorii
 * 3. ziskani vtipu z dane kategorie
 *
 * To zda se uklada vtip nebo se uklada seznam kategorii urcuje vlastnost isCategory objektu action.
 * V pripade chyby nastavuje redux chybu.
 * Pokud se spusti vice stejnych pozadavku, tak se predchazejici zrusi (hlavni watcher bere takeLatest), a
 * calcelne volani axios pomoci cancelTokenu (cast finally)
 *
 * */
function* handleSimpleRequest(action){
    const {apiCall} = action;
    const axiosCancelSource = axios.CancelToken.source();
    try{
        const response = yield call(getData, apiCall, axiosCancelSource.token);
        const {data} = response;
        let dispatchAction;
        if(action.hasOwnProperty('isCategory')){
            dispatchAction = setCategories;
        } else {
            dispatchAction = setChuck
        }
        yield all([
            put(dispatchAction(data)),
            put(setLoading(false)),
            put(clearError())
        ]);
    } catch (error){
        yield all([
            put(setError(getErrorData(error))),
            put(setLoading(false)),
        ]);
    } finally {
        if(yield cancelled()){
            axiosCancelSource.cancel();
        }
    }
}

/**
 * Generator pro ziskani vtipu obsahujici zadany text. Vraci se vsechny vtipy obsahuji dany text - jako pole.
 * Nasledne se generuje nahodny index, ze ktereho se vtip veme.
 * Pokud bude pole prazdne, tak se generuje chyba o neexistujicim zaznamu.
 *
 * API pro vhledani dle texu je v action objeku jako apiCall, vyhledavany text opak ve vlastnosti payload.
 *
 * V pripade chyby nastavuje redux chybu.
 * Pokud se spusti vice stejnych pozadavku, tak se predchazejici zrusi (hlavni watcher bere takeLatest), a
 * calcelne volani axios pomoci cancelTokenu (cast finally)
 *
 * */
function* handleGetFromQuery(action){
    const{apiCall, payload} = action;
    const axiosCancelSource = axios.CancelToken.source();
    try{
        const chucks = yield call(getData, apiCall + payload, axiosCancelSource.token);
        const {data} = chucks;
        const {total} = data;
        if(total !== 0) {
            let index = random(0, total - 1);
            const chuck = data.result[index];
            yield all([
                put(setChuck(chuck)),
                put(setLoading(false)),
                put(clearError())
            ]);
        } else {
            yield all([
                yield put(setError("No chuck joke for search text: " + payload)),
                put(setLoading(false)),
            ]);
        }

    }catch (error){
        yield all([
            put(setError(getErrorData(error))),
            put(setLoading(false)),
        ]);
    } finally {
        if(yield cancelled()){
            axiosCancelSource.cancel();
        }
    }
}

export {handleGetFromQuery, handleSimpleRequest};