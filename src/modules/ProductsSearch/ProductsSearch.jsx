import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchProducts } from "../../redux/products/products-operations";
import { getProducts } from "../../redux/products/products-selector";
import { addToCart } from "../../redux/products/products-actions";

import SearchForm from "./SearchForm";
import ProductsList from "../../shared/ProductsList";

function ProductsSearch() {
    const [state, setState] = useState("")
    const rebuild = useRef(false)
    const { items, cart, loading, error } = useSelector(getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        if(state) {
            dispatch(searchProducts(state));
            rebuild.current = true;
        }
    }, [state, dispatch]);


    const onSubmit = ({query}) => {
        setState(query)
    }

    const onAddCartClick = (item) => {
        cart.find(product => product.id === item.id) ?
         alert(`product "${item.title}" is already in cart`) :
         dispatch(addToCart(item))
    };

    return (
        <>
            <SearchForm onSubmit={onSubmit} /> 
            {loading && <p>Loading...</p> }
            {error && <p>{error.payload.message}</p>}
            {rebuild.current && <ProductsList handleClick={onAddCartClick} products={items} btnName="add to Cart" />}
        </>
    )
};

export default ProductsSearch;