import { Link } from "react-router-dom";

import s from "./not-found-page.module.css";

function NotFoundPage() {
    return (
        <div className={s.container}>
            <h2>Page not found</h2>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}

export default NotFoundPage;