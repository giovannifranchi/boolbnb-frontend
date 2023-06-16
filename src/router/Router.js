import { createRouter, createWebHistory } from "vue-router";
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Dashboard from '../pages/Dashboard.vue';
import Apartments from '../pages/Apartments.vue';
import Add from '../pages/Add.vue';
import Edit from '../pages/Edit.vue';
import Statistics from '../pages/Statistics.vue';
import Sponsor from '../pages/Sponsor.vue';
import Apartment from '../pages/Apartment.vue';
import AdvancedSearch from '../pages/AdvancedSearch.vue';
import SuccessSend from '../pages/SuccessSend.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register
            },
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'dashboard/apartments',
                component: Apartments
            },
            {
                path: 'dashboard/apartments/:slug/add',
                component: Add
            },
            {
                path: 'dashboard/apartments/:slug/edit',
                component: Edit
            },
            {
                path: 'dashboard/apartments/:slug/statistics',
                component: Statistics
            },
            {
                path: 'dashboard/apartments/:slug/sponsor',
                component: Sponsor
            },
            {
                path: 'apartment/:slug',
                component: Apartment
            },
            {
                path: 'advanced-search',
                component: AdvancedSearch
            },
            {
                path: 'apartment/:slug/success',
                component: SuccessSend
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
