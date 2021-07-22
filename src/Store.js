import { createStore, combineReducers } from "redux";
import appReducer from "./Reducer/AppReducer";

export const store = createStore(combineReducers({ appReducer }));
