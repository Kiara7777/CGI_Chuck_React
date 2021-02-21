import axios from "axios";
/*
function getData(getApiCall){
    return axios.get(getApiCall);
}
*/
/**
 * Request pro ziskani potrebnych dat. Mozna by bylo lepsi prespat na request, a cele nastaveni requestu urcit objektem.
 * */
function getData(getApiCall, token){
    return axios.get(getApiCall, {cancelToken: token});
}

export {getData};
