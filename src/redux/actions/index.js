import {
    GET_CATEGORY_CHUCK,
    GET_RANDOM_CHUCK,
    GET_QUERY_CHUCK,
    SET_CHUCK, GET_CATEGORIES, SET_CATEGORIES, SET_ERROR
} from "../../constants";
/**
 * Action pro ziskani random vtipu
 * */
const getRandomChuck = () => ({
    type: GET_RANDOM_CHUCK
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
});

const setCategories = (payload) => ({
    type: SET_CATEGORIES,
    payload
});

const setError = (payload) => ({
    type: SET_ERROR,
    payload
})

const getFromCategory = (payload) => ({
    type: GET_CATEGORY_CHUCK,
    payload
})

const getFromQuerry = (payload) => ({
    type: GET_QUERY_CHUCK,
    payload
});

export {getRandomChuck, setChuck, getCategories, setCategories, setError, getFromCategory, getFromQuerry};