import {chuckReducer} from "./chuckReducer";
import {combineReducers} from "redux";
import {categoriesReducer} from "./categoriesReducer";
import {errorReducer} from "./errorReducer";

const rootReducer = combineReducers({
   chuck: chuckReducer,
   categories: categoriesReducer,
   error: errorReducer
});

export default rootReducer;