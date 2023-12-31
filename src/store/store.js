import { createStore } from "vuex";

import Auth from '../api/Auth';
import Vendor from '../api/Vendor';
import Apartment from '../api/Apartment';
import Service from '../api/Service';
import Plan from "../api/Plan";

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

        plans: null,

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
        },

        getPlans(state){
            return state.plans;
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
        },

        setPlans(state, value){
            state.plans = value;
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
                const response = await Auth.register(data);
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
        },

        async fetchApartments({commit}){
            const response = await Apartment.getAll();
            commit('setApartments', response);
        },

        async fetchHighlighted({commit}){
            const response = await Apartment.getHighlighted();
            commit('setHighlighted', response);
        },

        async fetchServices({commit}){
            const response = await Service.get();
            commit('setServices', response);
        },

        async fetchUserApartments({commit}){
            const response = await Vendor.getApartments(this.state.user.token);
            response.error ? this.dispatch('clear') : commit('setUserApartments', response);
        },

        async fetchPlans({commit}){
            const response = await Plan.get();
            commit('setPlans', response);
        },

        clear({commit}){
            localStorage.clear();
            commit('setToken', null);
            commit('setUserInfo', null);
            commit('setUserApartments', null);
        }
    }
});

export default store;