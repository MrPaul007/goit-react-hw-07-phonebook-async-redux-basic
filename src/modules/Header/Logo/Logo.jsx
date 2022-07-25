import { Link } from "react-router-dom";

import s from "./logo.module.css";

function Logo() {
    return <Link to="/" className={s.logo}></Link>
};

export default Logo;