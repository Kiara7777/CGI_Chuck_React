import {call, put} from "redux-saga/effects";
import {getCategories, getFromCategory, getFromQuery, getRandomChuck} from "../requests/chuckRquests";
import {setCategories, setChuck, setError} from "../../actions";
import {random} from "../../../helpFunctions";

function* handleGetRandomChuck(){
    try {
        const chuck = yield call(getRandomChuck);
        const {data} = chuck;
        yield put(setChuck(data));
    } catch (error){
        yield put(setError(error));
    }
}

function* handleGetCategories(){
    try {
        const categories = yield call(getCategories);
        const {data} = categories;
        yield put(setCategories(data));
    }catch (error) {
        yield put(setError(error));
    }
}

function* handleGetFromCategory({payload}){
    try{
        const chuck = yield call(getFromCategory, payload);
        const {data} = chuck;
        yield put(setChuck(data));
    } catch (error){
        yield put(setError(error));
    }
}

function* handleGetFromQuery({payload}){
    try{
        const chucks = yield call(getFromQuery, payload);
        const {data} = chucks;
        const {total} = data;
        if(total !== 0) {
            let index = random(0, total - 1);
            const chuck = data.result[index];
            yield put(setChuck(chuck));
        } else
            yield put(setError("No chuck joke for search text: " + payload));
    }catch (error){
        console.log("chyba")
        console.log(error);
        yield put(setError(error));
    }
}

export {handleGetRandomChuck, handleGetCategories, handleGetFromCategory, handleGetFromQuery};