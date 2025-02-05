import { createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducer from "../state/reducers/Index";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
