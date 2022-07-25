import { NavLink } from "react-router-dom";

import s from "./menu.module.css";

const getLinkClassName = ({ isActive }) => {
    return isActive ? s.linkActive : s.link;
}

function Menu() {
    return (
        <div>
            <NavLink to="/" className={getLinkClassName}>Home</NavLink>
            <NavLink to="/search" className={getLinkClassName}>Search</NavLink>
        </div>
    )
};

export default Menu;