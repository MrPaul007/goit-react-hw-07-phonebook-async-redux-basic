import ProductsListItem from "./ProductsListItem";

function ProductsList({products, handleClick, btnName}) {

    const onClick = (item) => {
        handleClick({...item})
    }

    return (
        <ul>
            {products.map(product => (

                <ProductsListItem 
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    img={product.poster_path}
                    date={product.release_date}
                    rating={product.vote_average}
                    onClick={onClick}
                    buttonName={btnName}
                />
            ))}
        </ul>
    )
};

export default ProductsList;