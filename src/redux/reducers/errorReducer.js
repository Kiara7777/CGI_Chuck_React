import {CLEAR_ERROR, SET_ERROR} from "../../constants";

const initialState = "";

const errorReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ERROR:
            const errorText = action.payload;
            return errorText;
        case CLEAR_ERROR:
            return "";
        default:
            return state;
    }
}

export {errorReducer}