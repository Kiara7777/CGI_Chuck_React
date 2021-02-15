import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./redux/sagas";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {lightBlue, orange} from "@material-ui/core/colors";

////////////REDUX//////////////
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);
////////////////////////////////
const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500]
        },
        secondary: {
            main: orange[600]
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
