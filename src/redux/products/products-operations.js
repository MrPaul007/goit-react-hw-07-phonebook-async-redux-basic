import * as actions from "./products-actions";
import * as api from "../../shared/api/products";

export const fetchProducts = () => {
    const res = async(dispatch) => {
        dispatch(actions.fetchProductsRequest());
        try {
            const data = await api.getProducts();
            dispatch(actions.fetchProductsSuccess(data));
        } catch (error) {
            dispatch(actions.fetchProductsError(error));
        }
    }

    return res;
};

export const searchProducts = (query) => {
    const res = async(dispatch) => {
        dispatch(actions.searchProductsRequest());
        try {
            const data = await api.findProducts(query);
            dispatch(actions.searchProductsSuccess(data));
        } catch (error) {
            dispatch(actions.searchProductsError(error));
        }
    }

    return res;
};