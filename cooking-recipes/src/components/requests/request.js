export const localStorageKey = '__service_token__'

const request = (endpoint, {body, ...customConfig} = {}) => {
    const token = window.localStorage.getItem(localStorageKey);
    const headers = {'content-type': 'application/json'};

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    return window
        .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
        .then(async response => {
            if (response.status === 401) {
                logout();
                window.location.assign(window.location);
                return;
            }
            if (response.ok) {
                return await response.json();
            } else {
                const errorMessage = await response.text();
                return Promise.reject(new Error(errorMessage));
            }
        });
};

export const logout = () => {
    window.localStorage.removeItem(localStorageKey);
};

export const login = () => {

};

export const isLoggedIn = () =>  {
    return window.localStorage.getItem(localStorageKey) !== null;
}

export default request;