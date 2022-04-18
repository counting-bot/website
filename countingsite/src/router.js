import { createRouter, createWebHistory } from 'vue-router'

import home from './components/home.vue'
import premium from './components/premium.vue'
import privacy from './components/privacy.vue'

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/premium',
        component: premium
    },
    {
        path: '/privacy',
        component: privacy
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;