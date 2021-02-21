import {CLEAR_ERROR, SET_ERROR, SET_LOADING} from "../../constants";

const initialStateError = "";

const errorReducer = (state = initialStateError, action) => {
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

const loadingReducer = (state = true, action) => {
    switch (action.type){
        case SET_LOADING:
            return action.payload;
        default:
            return state;
    }
}

export {errorReducer, loadingReducer}