import {all, call, put, cancelled} from "redux-saga/effects";
import {getData, getDataTest} from "../requests/chuckRquests";
import {clearError, setCategories, setChuck, setError, setLoading} from "../../actions";
import {random} from "../../../helpFunctions";
import axios from "axios";


const getErrorData = errorApi => {
    const {data} = errorApi.response;
    const {error, message, status} = data;
    return `${status}: ${error}: ${message}`;
}

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