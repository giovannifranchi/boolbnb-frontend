import { createStore } from "vuex";

import Auth from '../api/Auth';
import Vendor from '../api/Vendor';
import Apartment from '../api/Apartment';
import Service from '../api/Service';

import { useToast } from "vue-toastification";

const toast = useToast();


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

        async login({commit}, data){
            try {
                const response = await Auth.login(data);
                if(response.error) throw new Error(response.error);
                localStorage.setItem('token', response.token);
                commit('setToken', response.token);
                commit('setUserInfo', response.user);
            }catch(error){
                toast.error(error.message);
            }
        },

        async register({commit}, data){
            try {
                const response = Auth.register(data);
                if(response.error) throw new Error(response.error);
                localStorage.setItem('token', response.token);
                commit('setToken', response.token);
                commit('setUserInfo', response.user);          
            } catch (error) {
                toast.error(error.message);
            }
        },

        async logout({commit}){
            await Auth.logout(this.state.user.token);
            commit('setToken', null);
            commit('setUserInfo', null);
            commit('setUserApartments', null);
            localStorage.clear(); 
        }

    }
});

export default store;