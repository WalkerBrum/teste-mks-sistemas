import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/',
});

export const apiProducts = {
    listProducts: () => {
        return axios.get('products?page=1&rows=50&sortBy=name&orderBy=DESC');
    }
};


