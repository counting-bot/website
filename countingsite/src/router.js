import { createRouter, createWebHistory } from 'vue-router'

import home from './components/home.vue'
import invite from './components/invite.vue'
import support from './components/support.vue'
import premium from './components/premium.vue'
// scores
import userscores from './components/userscores.vue'
import privacy from './components/privacy.vue'
import status from './components/status.vue'

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
    // {
    //     path: '/scores',
    //     component: scores
    // },
    {
        path: '/userscores',
        component: userscores
    },
    {
        path: '/privacy',
        component: privacy
    },
    {
        path: '/status',
        component: status
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;