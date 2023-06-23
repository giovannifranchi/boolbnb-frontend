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
            Header.post.Authorization = config.token ? `Bearer ${config.token}` : null;
            config.headers = Header.post;
            break;
        case 'PUT':
            Header.put.Authorization = config.token ? `Bearer ${config.token}` : null;
            config.headers = Header.put;
            break;
        case 'DELETE':
            Header.delete.Authorization = config.token ? `Bearer ${config.token}` : null;
            config.headers = Header.delete;
        default: return;
    }


    return (await axios.request(config)).data;
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