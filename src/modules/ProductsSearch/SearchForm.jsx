import { useState } from "react";

function ProductsSearchForm({onSubmit}) {
    const [state, setState] = useState({
        query: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({query: ""});
    }

    const handleChange = ({target}) => {
        const { name, value } = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={handleChange}
                placeholder=" search products"
                value={state.query}
                name="query"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default ProductsSearchForm;