import { useDispatch, useSelector } from "react-redux";

import { getCart } from "../../redux/products/products-selector";
import { removeFromCart } from "../../redux/products/products-actions";
import ProductsList from "../../shared/ProductsList";

function Cart() {
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
  
    const onRemoveCartClick = (item) => {
        dispatch(removeFromCart(item))
    };

    return (
        <div>
            <h2>Cart</h2>
            {cart.length ? <ProductsList handleClick={onRemoveCartClick} products={cart} btnName="remove from Cart" /> : <p>Cart is empty</p> }
        </div>
    )    
};

export default Cart;