import { createReducer, combineReducers } from "@reduxjs/toolkit";

import * as actions from "./products-actions";



const itemsReducer = createReducer([], {
    [actions.fetchProductsSuccess]: (_, {payload}) => payload,
    [actions.fetchByIdProductByIdSuccess]: (store, {payload}) => store.find(item => item.id === payload),
    [actions.searchProductsSuccess]: (_, {payload}) => payload,
});

const cartReducer = createReducer([], {
    [actions.addToCart]: (store, {payload}) => [...store, payload],
    [actions.removeFromCart]: (store, {payload}) => store.filter(item => item.id !== payload.id),
});

const loadingReducer = createReducer(false, {
    [actions.fetchProductsRequest]: () => true,
    [actions.fetchProductsSuccess]: () => false,
    [actions.fetchProductsError]: () => false,
    [actions.fetchByIdProductByIdRequest]: () => true,
    [actions.fetchByIdProductByIdSuccess]: () => false,
    [actions.searchProductsRequest]: () => true,
    [actions.searchProductsSuccess]: () => false,
    [actions.searchProductsError]: () => false,

});

const errorReducer = createReducer(null, {
    [actions.fetchProductsRequest]: () => null,
    [actions.fetchProductsError]: (_, payload) => payload,
    [actions.fetchByIdProductByIdRequest]: () => null,
    [actions.fetchByIdProductByIdError]: (_, payload) => payload,
    [actions.searchProductsRequest]: () => null,
    [actions.searchProductsError]: (_, payload) => payload,
});

const productsReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    loading: loadingReducer,
    error: errorReducer,
});

export default productsReducer;