import request from './request';

const create = (resource, data) => {
    return request(resource, {body: data});
};
  
const read = (resource) => {
    return request(resource)
}
  
const update = (resource, updates) => {  
    return request(resource, {
        method: 'PUT',
        body: updates,
    })
}
  
function remove(resource) {  
    return request(resource, {method: 'DELETE'})
}
  
export {create, read, remove, update}