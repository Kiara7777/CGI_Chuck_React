import {SET_CHUCK} from "../../constants";

const initialState = {
    value: undefined,
    category: undefined
}

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