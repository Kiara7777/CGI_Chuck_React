import {SET_CATEGORIES} from "../../constants";


const initialState = [];

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            const {payload} = action;
            return payload;
        default:
            return state;
    }

}

export {categoriesReducer};