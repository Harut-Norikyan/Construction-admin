import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import reducer from './store/reducers';
import watchers from './store/sagas/index';
import {applyMiddleware,compose,createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import "./assets/libs/bootstrap/css/bootstrap.min.css";
// import '../node_modules/material-components-web/dist/material-components-web.min.css'
// import '@rmwc/drawer/styles'
import "./assets/libs/css/style.css";
import "./assets/libs/css/theme.min.css"
import "./assets/css/style.css"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(saga)),
);
saga.run(watchers);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
