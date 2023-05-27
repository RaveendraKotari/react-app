import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    product: productReducer,
})