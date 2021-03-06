import {chuckReducer} from "./chuckReducer";
import {combineReducers} from "redux";
import {categoriesReducer} from "./categoriesReducer";
import {errorReducer, loadingReducer} from "./statusReducer";

/**
 * Hlavni spojovaci reducer REDUXU
 * */
const rootReducer = combineReducers({
   chuck: chuckReducer,
   categories: categoriesReducer,
   error: errorReducer,
   loading: loadingReducer,
});

export default rootReducer;