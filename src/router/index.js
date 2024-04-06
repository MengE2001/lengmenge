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
            path: '/technology',
            component: () => import('../views/Technology.vue')
        },
        {
            path: '/achivement',
            component: () => import('../views/Achivement.vue')
        },
        {
            path: '/education',
            component: () => import('../views/Education.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
        }
    ]
})

export default router