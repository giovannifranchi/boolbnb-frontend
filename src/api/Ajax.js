import axios from "axios";
import Header from "./Header";


const baseURL = import.meta.env.VITE_BASE_URL;

const ajaxRequest = async (config) => {
    config.baseURL = baseURL;

    config.headers = {};

    const authHeaderValue = config.token ? `Bearer ${config.token}` : null;

    switch (config.method) {
        case 'GET':
            config.headers = {...Header.get, 'Authorization': authHeaderValue};
            break;
        case 'POST':
            config.headers = {...Header.post, 'Authorization': authHeaderValue};
            break;
        case 'PUT':
            config.headers = {...Header.put, 'Authorization': authHeaderValue};
            break;
        case 'DELETE':
            config.headers = {...Header.delete, 'Authorization': authHeaderValue};
            break;
        default: 
            return;
    }


    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        // Here you throw the error to be caught where the AJAX methods are called
        throw error;
    }
}


const Ajax = {

    get: (endpoint, params = null, config = {}) => {
        config = {
            ...config,
            ...{
                url: endpoint,
                method: 'GET',
                params,
            }
        }
        return ajaxRequest(config);
    },

    post: (endpoint, params, config = {}) => {
        config = {
            ...config,
            ...{
                url: endpoint,
                method: 'POST',
                data: params
            }
        }
        return ajaxRequest(config);
    },

    put: (endpoint, params, config = {}) => {
        config = {
            ...config,
            ...{
                url: endpoint,
                method: 'PUT',
                data: params
            }
        }

        return ajaxRequest(config)
    },

    delete: (endpoint, params = null, config = {}) => {
        config = {
            ...config,
            ...{
                url: endpoint,
                method: 'DELETE'
            }
        }

        if (params) {
            config.data = { data: params }
        }

        return ajaxRequest(config)
    }
}


export default Ajax;