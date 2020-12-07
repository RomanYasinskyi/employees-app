import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {birthdayReducer, employeesReducer} from "./reducers/employeesReducers";
import thunk from "redux-thunk";

const initialState = {};
const reducer = combineReducers({
    employeesList: employeesReducer,
    birthdayList: birthdayReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;