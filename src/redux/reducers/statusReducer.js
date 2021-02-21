import {CLEAR_ERROR, SET_ERROR, SET_LOADING} from "../../constants";

const initialStateError = "";

/**
 * Reducer z REDUX pro indikaci erroru. Error se nastavuje jako string, ktery se neasledne
 * zobrazi uzivateli v komponente JokeArea
 * */
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

/**
 * Reducer z REDUX, indikuje nacitani dat ze serveru. Pomoci neho se urcuje zobrazeni nacitaciho kolecka.
 * */
const loadingReducer = (state = true, action) => {
    switch (action.type){
        case SET_LOADING:
            return action.payload;
        default:
            return state;
    }
}

export {errorReducer, loadingReducer}