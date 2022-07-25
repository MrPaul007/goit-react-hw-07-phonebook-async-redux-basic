import { NavLink } from "react-router-dom";

import s from "./cart.module.css";

const getLinkClassName = ({ isActive }) => {
    return isActive ? s.cartActive : s.cart;
};

function Cart() {
    return <NavLink to="/cart" className={getLinkClassName}></NavLink>
};

export default Cart;