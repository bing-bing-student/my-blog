import axios from 'axios';


const config =  {
    baseURL: '/api',
    headers:{
        'Content-Type':'application/json;charset=utf-8',
    },
    withCredentials: true,
}

const _axios = axios.create(config)

_axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

_axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

export default _axios;