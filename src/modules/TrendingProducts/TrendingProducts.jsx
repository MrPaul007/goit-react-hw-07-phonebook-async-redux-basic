import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/products/products-operations";
import { getProducts } from "../../redux/products/products-selector";
import { addToCart } from "../../redux/products/products-actions";
import ProductsList from "../../shared/ProductsList";

function TrendingProducts() {
    const { items, cart, loading, error } = useSelector(getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const onAddCartClick = (item) => {
        cart.find(product => product.id === item.id) ? alert(`product "${item.title}" is already in cart`) : dispatch(addToCart(item))
    };

    return (
        <div>
            <h2>Trending products</h2>
            {loading ? <p>Loading...</p> : <ProductsList handleClick={onAddCartClick} products={items} btnName="add to Cart" />}
            {error && <p>{error.message}</p>}
        </div>
    )    
};

export default TrendingProducts;