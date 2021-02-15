import {all, takeLatest} from "redux-saga/effects";
import {GET_CATEGORIES, GET_CATEGORY_CHUCK, GET_QUERY_CHUCK, GET_RANDOM_CHUCK} from "../../constants";
import {
    handleGetCategories,
    handleGetFromCategory,
    handleGetFromQuery,
    handleGetRandomChuck
} from "./handlers/chuckHandlers";

function* watcherGetRandom(){
    yield takeLatest(GET_RANDOM_CHUCK, handleGetRandomChuck);
}

function* watcherGetCategories(){
    yield takeLatest(GET_CATEGORIES, handleGetCategories);
}

function* watcherGetFromCategory(){
    yield takeLatest(GET_CATEGORY_CHUCK, handleGetFromCategory);
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