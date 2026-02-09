import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Profile
        },
        {
            path: '/skills',
            component: () => import('../views/Technology.vue')
        },
        {
            path: '/experience',
            component: () => import('../views/Experience.vue')
        },
        {
            path: '/projects',
            component: () => import('../views/Projects.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
        }
    ]
})

export default router