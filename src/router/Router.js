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
import PageNotFound from '../pages/PageNotFound.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                name: 'home',
                path: '/',
                component: Home
            },
            {
                name: 'login',
                path: '/login',
                component: Login
            },
            {
                name: 'register',
                path: '/register',
                component: Register
            },
            {
                name: 'dashboard',
                path: '/dashboard',
                component: Dashboard,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'apartments',
                path: '/dashboard/apartments',
                component: Apartments,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'add',
                path: '/dashboard/apartments/:slug/add',
                component: Add,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'edit',
                path: '/dashboard/apartments/:slug/edit',
                component: Edit,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'statistics',
                path: '/dashboard/apartments/:slug/statistics',
                component: Statistics,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'sponsor',
                path: '/dashboard/apartments/:slug/sponsor',
                component: Sponsor,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'apartment',
                path: '/apartment/:slug/:id',
                component: Apartment
            },
            {
                path: '/advanced-search',
                name: 'AdvancedSearch',
                component: AdvancedSearch,
            },
            {
                name: 'successSend',
                path: '/apartment/:slug/success',
                component: SuccessSend
            },
            {
                name: 'notFound',
                path: '/:pathMatch(.*)*',
                component: PageNotFound
            },
        ]
    },
];

const router = createRouter({                                
    history: createWebHistory(),
    routes
});

export default router;
