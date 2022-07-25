import s from "./product-list.module.css";

function ProductsListItem({ id, title, img, date, rating, onClick, buttonName }) {

    const handleClick = () => {
        const item = {
            id,
            title,
            poster_path: img,
            release_date: date,
            vote_average: rating
        };
        onClick({...item})
    }
    const image = 'https://image.tmdb.org/t/p/w300' + img;
    return (
        <li className={s.item}>
            <img src={image} alt={title} className={s.image}/>
            <div>
            <h2 className={s.text}>{title}</h2>
            <p className={s.text}>Release date: {date}</p>
            <p className={s.text}>User score: {Math.floor(rating*10)}%</p>
            <button type="button" onClick={handleClick} className={s.button}> {buttonName}</button>
            </div>
        </li>
    )
}

export default ProductsListItem;