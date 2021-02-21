import {expectSaga} from "redux-saga-test-plan";
import {watcherGetRandom} from "../redux/sagas";
import {GET_RANDOM_CHUCK} from "../constants";
import {throwError} from "redux-saga-test-plan/providers";
import {clearError, setCategories, setChuck, setError, setLoading} from "../redux/actions";
import {handleSimpleRequest} from "../redux/sagas/handlers/chuckHandlers";
import * as matchers from 'redux-saga-test-plan/matchers';
import {getData} from "../redux/sagas/requests/chuckRquests";

/**
 * Testy pro redux-saga
 * - ziskani pozadovanych dat a vyvolani pozadovanych akci(side-effects)
 * - vyvolani chyby a nastaveni chyboveho hlaseni
 * */

const fakeResponse = {
    data: {
        categories: ["a"],
        value: "Fake chuck"
    }
};
const fakeUrl = "fake_url";

const errorResponse = {
    response: {
        data:{
            error: "Fake error",
            message: "Error message",
            status: 404
        }
    }
};

const action = {
    apiCall: fakeUrl
};

describe("Testing sagas", () => {
    it("should get random Chuck and dispatch SET_CHUCK, SET_LOADING, CLEAR_ERROR", () => {
      return expectSaga(watcherGetRandom)
          .provide([
              [matchers.call.fn(getData), fakeResponse]
          ])
          .put(setChuck(fakeResponse.data))
          .put(setLoading(false))
          .put(clearError())
          .dispatch({type: GET_RANDOM_CHUCK, apiCall: fakeUrl})
          .silentRun();
    })

    it("should handle error and dispatch SET_ERROR, SET_LOADING", () => {
        return expectSaga(handleSimpleRequest, action)
            .provide([
                [matchers.call.fn(getData), throwError(errorResponse)]
            ])
            .put(setError("404: Fake error: Error message"))
            .run();
    })
});