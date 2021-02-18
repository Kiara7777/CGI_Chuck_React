import {call, put} from "redux-saga/effects";
import {getData} from "../requests/chuckRquests";
import {setCategories, setChuck, setError} from "../../actions";
import {random} from "../../../helpFunctions";

const getErrorData = errorApi => {
    const {data} = errorApi.response;
    const {error, message, status} = data;
    return `${status}: ${error}: ${message}`;
}

function* handleSimpleRequest(action){
    const {apiCall} = action;
    try{
        const response = yield call(getData, apiCall);
        const {data} = response;
        if(action.hasOwnProperty('isCategory')){
            yield put(setCategories(data));
        } else {
            yield put(setChuck(data));
        }
    } catch (error){
        yield put(setError(getErrorData(error)));
    }
}

function* handleGetFromQuery(action){
    const{apiCall, payload} = action;
    try{
        const chucks = yield call(getData, apiCall + payload);
        const {data} = chucks;
        const {total} = data;
        if(total !== 0) {
            let index = random(0, total - 1);
            const chuck = data.result[index];
            yield put(setChuck(chuck));
        } else
            yield put(setError("No chuck joke for search text: " + payload));
    }catch (error){
        yield put(setError(getErrorData(error)));
    }
}

export {handleGetFromQuery, handleSimpleRequest};