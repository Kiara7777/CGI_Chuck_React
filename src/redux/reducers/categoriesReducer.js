import {SET_CATEGORIES} from "../../constants";


const initialState = [];

/**
 * Reducer z REDUX, slouzi pro ovladani kategorii
 * kategorie jsou ulozene jako pole stringu
 * */
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