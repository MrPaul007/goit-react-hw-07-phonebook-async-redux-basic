import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from "./products/products-reducer"

const rootReducer = combineReducers({
    products: productsReducer,
});

export default rootReducer;