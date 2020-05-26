import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import feedReducer from "../reducers/feedReducer";

export default createStore(combineReducers({
    feeds: feedReducer
}), applyMiddleware(thunk));
