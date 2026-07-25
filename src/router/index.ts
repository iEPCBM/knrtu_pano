import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TourView from '@/views/TourView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/tour/:id',
            name: 'tour',
            component: TourView,
            props: true
        }
    ]
})

export default router