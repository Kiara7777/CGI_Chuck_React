import axios from "axios";

function getData(getApiCall){
    return axios.get(getApiCall);
}

export {getData};
