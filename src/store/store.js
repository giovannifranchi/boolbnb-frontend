import { createStore } from "vuex";

import Auth from '../api/Auth';
import Vendor from '../api/Vendor';
import Apartment from '../api/Apartment';
import Service from '../api/Service';

const store =  createStore({
    state: {
        user: {

            info: null,
            token: null,
            apartments: null,

        },

        apartments: null,

        highlightedApartments: null,

        services: null,

    },

    getters: {

        getUserInfo(state){
            return state.user.info;
        },

        getUserApartments(state){
            return state.user.apartments;
        },

        getToken(state){
            return state.user.token;
        },

        getApartments(state){
            return state.apartments;
        },

        getHighlighted(state){
            return state.highlightedApartments;
        },

        getServices(state){
            return state.services;
        }

    },

    mutations: {

        setUserInfo(state, value){
            state.user.info = value;
        },

        setUserApartments(state, value){
            state.user.apartments = value;
        },

        setToken(state, value){
            state.user.token = value;
        },

        setApartments(state, value){
            state.apartments = value;
        },

        setHighlighted(state, value){
            state.highlightedApartments = value;
        },

        setServices(state, value){
            state.services = value;
        }
        
    },

    actions: {

        async fecthUsername({commit}){
            const response = await User.getUsername(this.state.user.authtoken);
            commit('setUsername', response);
        },

        async fetchRole({commit}){
            const response = await User.getRole(this.state.user.authtoken);
            commit('setRole', response);
        }

    }
});

export default store;