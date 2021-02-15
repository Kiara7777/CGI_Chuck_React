import axios from "axios";
import {API} from "../../../constants";

function getRandomChuck(){
    return axios.get(API.RANDOM);
}

function getCategories(){
    return axios.get(API.CATEGORIES);
}

function getFromCategory(category){
    return axios.get(API.FROM_CATEGORY + category);
}

function getFromQuery(query){
    return axios.get(API.WITH_QUERY + query);
}

export {getRandomChuck, getCategories, getFromCategory, getFromQuery};
