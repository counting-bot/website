import { createRouter, createWebHistory } from 'vue-router'

import home from './components/home.vue'
import invite from './components/invite.vue'
import support from './components/support.vue'
import premium from './components/premium.vue'
import scores from './components/scores.vue'
import userscores from './components/userscores.vue'
import privacy from './components/privacy.vue'
import status from './components/status.vue'
import login from './components/login.vue'
import logout from './components/logout.vue'
import user from './components/user.vue'
import server from './components/server.vue'

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
        path: '/scores',
        component: scores
    },
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
    {
        path: '/login:pageOrgin',
        component: login
    },
    {
        path: '/logout',
        component: logout
    },
    {
        path: '/user',
        component: user
    },
    {
        path: '/server/:guildid',
        component: server
    },
    {
        path: '/server/:guildid/:channelID',
        component: server
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;