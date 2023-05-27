import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "../reducers/rootReducer";

const Store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
})

export default Store;