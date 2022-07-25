import axios from "axios";

const API_KEY = "dd208677c341fec119543dd378b0d37a";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const getProducts = async () => {
    const { data } = await instance.get("trending/movie/day", {
        params:{
            api_key: API_KEY,
        }
    });
    return data.results;
};

export const findProducts = async (query) => {
    const { data } = await instance.get("search/movie", {
        params:{
            query,
            api_key: API_KEY,
        }
    });
    return data.results;
};

export const getProductById = async (id) => {
    const { data } = await instance.get(`movie/${id}`, {
        params:{
            id,
            api_key: API_KEY,
        }
    });
    return data;
};
