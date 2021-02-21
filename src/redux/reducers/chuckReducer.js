import {SET_CHUCK} from "../../constants";

const initialState = {
    value: undefined,
    category: undefined
}

/**
 * Reducer z REDUX, ma na starosti update vtipu, ziskana data jsou v payload objektu
 * kategorie se prenasi jako jednoprvkove pole, pokud vtip nema kategorii, tak se kategorie nastavi
 * jako string "undefined"
 * */
const chuckReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHUCK:
            const {payload} = action;
            const {categories, value} = payload;
            let category = undefined;
            if(categories.length > 0)
                category = categories[0];
            category += "";
            return {...state, value, category};
        default:
            return state;

    }
}

export {chuckReducer};