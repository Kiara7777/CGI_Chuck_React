import axios from "axios";
/*
function getData(getApiCall){
    return axios.get(getApiCall);
}
*/
function getData(getApiCall, token){
    return axios.get(getApiCall, {cancelToken: token});
}

export {getData};
