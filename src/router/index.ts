import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from "../components/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: '/home'
    },
]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router;