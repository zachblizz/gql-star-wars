import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import {DataReducer} from "./reducers/data";
import mySaga from "./saga/DataSaga";
import logger from 'redux-logger';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(
  DataReducer,
  applyMiddleware(sagaMiddleware, logger)
);

// then run the saga
sagaMiddleware.run(mySaga);