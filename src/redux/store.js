import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/saga/root.saga';
import rootReducer from "./reducer/rootReducer";
import {loggerMiddleware} from '../redux/middelware/loggerMiddleware';


const sagaMiddleware = createSagaMiddleware();
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const store = compose(
    applyMiddleware(sagaMiddleware,loggerMiddleware),
    enableReduxDevTools,
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;