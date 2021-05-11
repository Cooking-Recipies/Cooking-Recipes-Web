import axios from 'axios';
import { localStorageKey } from './request';

const resolveResource = (resource) => {
    return `${process.env.REACT_APP_API_URL}/${resource}`;
}

const create = (resource, data) => {
    return axios.post(
        resolveResource(resource),
        data, 
        { 
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(localStorageKey)}`
            } 
        }
    );
};
  
const read = (resource) => {
    return axios.get(resolveResource(resource),
    { 
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem(localStorageKey)}`
        }
    });
}
  
const update = (resource, updates) => {  
    return axios.put(resolveResource(resource),
        updates,
        { 
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(localStorageKey)}`
            }
        });
}
  
function remove(resource) {  
    return axios.delete(resolveResource(resource),
    { 
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem(localStorageKey)}`
        }
    });
}
  
export {create, read, remove, update}