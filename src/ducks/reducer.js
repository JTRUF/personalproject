import axios from 'axios';

const initialState = {
    user: {},
    products: {}
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO';

export function getUser() {
    let userData = axios.get('/').then(res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}
export function getProduct() {
    let productData = axios.get('/').then(res => {
        return res.data;
    })
    return {
        type: GET_PRODUCT_INFO,
        payload: productData
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        default: 
        return state;
    }
}