import {createStore, applyMiddleware} from "redux";
// import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
// import { todos } from "./app.sagas";
const middleware =[];
if(process.env.NODE_ENV === "development"){
    middleware.push(logger);
}
const store =createStore(rootReducer,applyMiddleware(...middleware));

export default store;