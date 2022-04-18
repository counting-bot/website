import { createRouter, createWebHistory } from 'vue-router'

import home from './components/home.vue'
import invite from './components/invite.vue'
import support from './components/support.vue'

import premium from './components/premium.vue'
import privacy from './components/privacy.vue'

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/invite',
        component: invite
    },
    {
        path: '/support',
        component: support
    },


    {
        path: '/premium',
        component: premium
    },
    {
        path: '/privacy',
        component: privacy
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;