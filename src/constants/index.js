/**
 * Soubor obsahujici konstanty pouzivane v programu
 * */

const API = {
    RANDOM: "https://api.chucknorris.io/jokes/random",
    CATEGORIES: "https://api.chucknorris.io/jokes/categories",
    FROM_CATEGORY: "https://api.chucknorris.io/jokes/random?category=",
    WITH_QUERY: "https://api.chucknorris.io/jokes/search?query="
};

const GET_RANDOM_CHUCK = "GET_RANDOM_CHUCK";
const GET_QUERY_CHUCK = "GET_QUERY_CHUCK";
const GET_CATEGORY_CHUCK = "GET_CATEGORY_CHUCK";
const GET_CATEGORIES = "GET_CATEGORIES";

const SET_CHUCK = "SET_CHUCK";
const SET_CATEGORIES = "SET_CATEGORIES";

const SET_ERROR = "SET_ERROR";

export {GET_RANDOM_CHUCK, GET_QUERY_CHUCK, GET_CATEGORY_CHUCK, SET_CHUCK, API, GET_CATEGORIES, SET_CATEGORIES, SET_ERROR};