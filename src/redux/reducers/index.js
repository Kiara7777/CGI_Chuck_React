import {chuckReducer} from "./chuckReducer";
import {combineReducers} from "redux";
import {categoriesReducer} from "./categoriesReducer";

const rootReducer = combineReducers({
   chuck: chuckReducer,
   categories: categoriesReducer
});

export default rootReducer;