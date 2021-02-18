import {all, takeLatest} from "redux-saga/effects";
import {GET_CATEGORIES, GET_CATEGORY_CHUCK, GET_QUERY_CHUCK, GET_RANDOM_CHUCK} from "../../constants";
import {handleGetFromQuery, handleSimpleRequest,} from "./handlers/chuckHandlers";

function* watcherGetRandom(){
    yield takeLatest(GET_RANDOM_CHUCK, handleSimpleRequest);
}

function* watcherGetCategories(){
    yield takeLatest(GET_CATEGORIES, handleSimpleRequest);
}

function* watcherGetFromCategory(){
    yield takeLatest(GET_CATEGORY_CHUCK, handleSimpleRequest);
}

function* watcherGetFromQuery(){
    yield takeLatest(GET_QUERY_CHUCK, handleGetFromQuery);
}

function* rootWatcher(){
    yield all([
        watcherGetRandom(),
        watcherGetCategories(),
        watcherGetFromCategory(),
        watcherGetFromQuery()
    ]);
}


export default rootWatcher;