import {all, takeLatest} from "redux-saga/effects";
import {GET_CATEGORIES, GET_CATEGORY_CHUCK, GET_QUERY_CHUCK, GET_RANDOM_CHUCK} from "../../constants";
import {handleGetFromQuery, handleSimpleRequest,} from "./handlers/chuckHandlers";

/**
 * Generatory z redux-saga, nsalouhaji na jednotlive akce a spousti ziskani potrebnych dat.
 * takeLatest - pokud se vyvola vice akci stejneho typu, tak se ty predchazejici zrusi a vrati se pouze ten posledni
 * */

/**
 * Pro ziskani nahodneho vtipu pri startu aplikace
 * */
function* watcherGetRandom(){
    yield takeLatest(GET_RANDOM_CHUCK, handleSimpleRequest);
}

/**
 * Pro ziskani seznamu kategorii
 * */
function* watcherGetCategories(){
    yield takeLatest(GET_CATEGORIES, handleSimpleRequest);
}

/**
 * Pro ziskani nahodneho vtipu z dane kategorie
 * */
function* watcherGetFromCategory(){
    yield takeLatest(GET_CATEGORY_CHUCK, handleSimpleRequest);
}

/**
 * Pro ziskani nahodneho vtipu s urcenym textem
 * */
function* watcherGetFromQuery(){
    yield takeLatest(GET_QUERY_CHUCK, handleGetFromQuery);
}

/**
 * Sjednocujici listener, spousti vsechny ostatni
 * */
function* rootWatcher(){
    yield all([
        watcherGetRandom(),
        watcherGetCategories(),
        watcherGetFromCategory(),
        watcherGetFromQuery()
    ]);
}


export {rootWatcher, watcherGetRandom, watcherGetCategories};