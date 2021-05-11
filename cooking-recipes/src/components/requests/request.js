import axios from 'axios';

export const localStorageKey = '__service_token__'

export const logout = () => {
    window.localStorage.removeItem(localStorageKey);
};

export const login =  (credentials) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, { withCredentials: true })
    .then(resp => axios.post(`${process.env.REACT_APP_API_URL}/api/login`, credentials, { withCredentials: true }));
};

export const register =  (credentials) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, { withCredentials: true })
    .then(resp => axios.post(`${process.env.REACT_APP_API_URL}/api/register`, credentials, { withCredentials: true }))
    .then(resp => axios.post(`${process.env.REACT_APP_API_URL}/api/login`, credentials, { withCredentials: true }));
}

export const isLoggedIn = () => {
    return window.localStorage.getItem(localStorageKey) !== null;
};