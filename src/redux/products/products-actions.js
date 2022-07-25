import { createAction } from "@reduxjs/toolkit";

export const fetchProductsRequest = createAction("products/fetch/request");
export const fetchProductsSuccess = createAction("products/fetch/success");
export const fetchProductsError = createAction("products/fetch/error");

export const fetchByIdProductByIdRequest = createAction("products/search/request");
export const fetchByIdProductByIdSuccess = createAction("products/search/success");
export const fetchByIdProductByIdError = createAction("products/search/error");

export const searchProductsRequest = createAction("products/search/request");
export const searchProductsSuccess = createAction("products/search/success");
export const searchProductsError = createAction("products/search/error");

export const addToCart = createAction("products/cart/add", ((data) => {return{payload: {...data}}}));
export const removeFromCart = createAction("products/cart/remove", ((data) => {return{payload: {...data}}}));