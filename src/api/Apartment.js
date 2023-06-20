import Ajax from "./Ajax";

const Apartment = {

    getAll: () => {
        return Ajax.get('/apartments');
    },

    getOne: (id) => {
        return Ajax.get(`/apartments/${id}`);
    },

    getHighlighted: () => {
        return Ajax.get('/apartments/highlighted');
    },

    searchByPosition: (params) => {
        return Ajax.get('/apartments/search/advanced', params);
    }


}

export default Apartment;