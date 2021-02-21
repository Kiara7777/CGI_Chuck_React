import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "./redux/sagas";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {grey, orange} from "@material-ui/core/colors";

////////////REDUX//////////////
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
////////////////////////////////
const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[300]
        },
        secondary: {
            main: orange['A700']
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
