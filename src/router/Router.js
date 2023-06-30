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
                component: Home,
                meta: {
                    title: "Home"
                }
            },
            {
                name: 'login',
                path: '/login',
                component: Login,
                meta: {
                    title: "Login"
                }
            },
            {
                name: 'register',
                path: '/register',
                component: Register,
                meta: {
                    title: "Register"
                }
            },
            {
                name: 'dashboard',
                path: '/dashboard',
                component: Dashboard,
                meta: {
                    title: "Dashboard"
                }
            },
            {
                name: 'apartments',
                path: '/dashboard/apartments',
                component: Apartments,
                meta: {
                    title: "Apartments"
                }
            },
            {
                name: 'add',
                path: '/dashboard/apartments/:slug/add',
                component: Add,
                meta: {
                    title: "Add"
                }
            },
            {
                name: 'edit',
                path: '/dashboard/apartments/:slug/edit',
                component: Edit,
                meta: {
                    title: "Edit"
                }
            },
            {
                name: 'statistics',
                path: '/dashboard/apartments/:slug/statistics',
                component: Statistics,
                meta: {
                    title: "Statistics"
                }
            },
            {
                name: 'sponsor',
                path: '/dashboard/apartments/:slug/sponsor',
                component: Sponsor,
                meta: {
                    title: "Sponsor"
                }
            },
            {
                name: 'apartment',
                path: '/apartment/:slug/:id',
                component: Apartment,
                meta: {
                    title: "Apartment"
                }
            },
            {
                path: '/advanced-search',
                name: 'AdvancedSearch',
                component: AdvancedSearch,
                meta: {
                    title: "Advanced Search"
                }
            },
            {
                name: 'successSend',
                path: '/apartment/:slug/success',
                component: SuccessSend,
                meta: {
                    title: "Success Send"
                }
            },
            {
                name: 'notFound',
                path: '/:pathMatch(.*)*',
                component: PageNotFound,
                meta: {
                    title: "Page Not Found"
                }
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router;
