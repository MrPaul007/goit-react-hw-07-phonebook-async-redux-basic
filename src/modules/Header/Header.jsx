import Logo from "./Logo"
import Cart from "./Cart";
import Menu from "./Menu";
import s from "./header.module.css";

function Header() {
    return (
    <header className={s.header}>
        <nav className={s.menu}>
            <Logo />
            <Menu />
            <Cart />
        </nav>
    </header>
    )
}

export default Header;