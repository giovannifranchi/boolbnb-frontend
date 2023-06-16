import Ajax from "./Ajax";

const Vendor = {

    getApartments: (token)=> {
        return Ajax.get('/apartments/vendors/index', {token});
    },

    getOneApartment: (token, id)=> {
        return Ajax.get(`/apartments/vendors/${id}`, {token});
    },

    create: (token, data)=> {
        return Ajax.post('/apartments/vendors/create', data, {token});
    },

    update: (token, data, id)=> {
        return Ajax.put(`/apartments/vendors/update/${id}`, data, {token});
    },

    delete: (token, id)=> {
        return Ajax.delete(`/apartments/vendors/delete/${id}`, null, {token});
    }

}