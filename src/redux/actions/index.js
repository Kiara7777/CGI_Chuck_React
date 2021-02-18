import {
    GET_CATEGORY_CHUCK,
    GET_RANDOM_CHUCK,
    GET_QUERY_CHUCK,
    SET_CHUCK, GET_CATEGORIES, SET_CATEGORIES, SET_ERROR, CLEAR_ERROR, API
} from "../../constants";
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

const getCategories = () => ({
    type: GET_CATEGORIES,
    apiCall: API.CATEGORIES,
    isCategory: true
});

const setCategories = (payload) => ({
    type: SET_CATEGORIES,
    payload
});

const setError = (payload) => ({
    type: SET_ERROR,
    payload
});

const clearError = () => ({
   type: CLEAR_ERROR
});

const getFromCategory = (payload) => ({
    type: GET_CATEGORY_CHUCK,
    apiCall: API.FROM_CATEGORY + payload,
});

const getFromQuerry = (payload) => ({
    type: GET_QUERY_CHUCK,
    apiCall: API.WITH_QUERY,
    payload
});

export {getRandomChuck, setChuck, getCategories, setCategories, setError, getFromCategory, getFromQuerry, clearError};