import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import todoSlice from "./slice/todoSlice";
import healthCheckSlice from "./slice/healthCheckSlice";

const rootReducer = combineReducers({
    todos: todoSlice,
    healthCheck: healthCheckSlice,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;
