import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";

function UserRoutes() {
    return (
    <div className="user-routes">
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>        
    </div>
    )
};

export default UserRoutes;