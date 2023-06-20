import axios from "axios"

const apiKey = import.meta.env.VITE_TOMTOM_API_KEY;

const Search = {
    autocomplete: async (query) => {
        const response = await axios.get(`https://api.tomtom.com/search/2/search/${query}.json?key=${apiKey}&typeahead=true&limit=5`)
        return response.data;
    }
}

export default Search;