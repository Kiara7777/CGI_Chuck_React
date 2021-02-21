import {
    GET_CATEGORY_CHUCK,
    GET_RANDOM_CHUCK,
    GET_QUERY_CHUCK,
    SET_CHUCK, GET_CATEGORIES, SET_CATEGORIES, SET_ERROR, CLEAR_ERROR, API, SET_LOADING
} from "../../constants";

/**
 * Action objekty pro REDUX
 * */

/**
 * Action pro ziskani random vtipu
 * */
const getRandomChuck = () => ({
    type: GET_RANDOM_CHUCK,
    apiCall: API.RANDOM,
})

/**
 * Action pro nastaveni vtipu do store
 * */
const setChuck = (payload) => ({
    type: SET_CHUCK,
    payload
})

/**
 * Action pro vyhledani kategorii
 * */
const getCategories = () => ({
    type: GET_CATEGORIES,
    apiCall: API.CATEGORIES,
    isCategory: true
});

/**
 * Action pro nastaveni kategorii
 * */
const setCategories = (payload) => ({
    type: SET_CATEGORIES,
    payload
});

/**
 * Action pro nastaveni error zpravy
 * */
const setError = (payload) => ({
    type: SET_ERROR,
    payload
});

/**
 * Action pro vycisteni error stavu - error zprava se smaze
 * */
const clearError = () => ({
   type: CLEAR_ERROR
});

/**
 * Action pro pozadavek na ziskani vtipu z dane kategorie
 * kategorie se posila jako payload
 * */
const getFromCategory = (payload) => ({
    type: GET_CATEGORY_CHUCK,
    apiCall: API.FROM_CATEGORY + payload,
});

/**
 * Action pro pozadavek na ziskani vtipu z danym textem
 * textem se posila jako payload
 * */
const getFromQuerry = (payload) => ({
    type: GET_QUERY_CHUCK,
    apiCall: API.WITH_QUERY,
    payload
});

/**
 * Action pro nastaveni indikace nacitani
 * */
const setLoading = (payload) => ({
   type: SET_LOADING,
   payload
});

export {getRandomChuck, setChuck, getCategories, setCategories, setError, getFromCategory, getFromQuerry, clearError, setLoading};