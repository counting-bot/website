import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
// import 'material-design-icons/iconfont/material-icons.css'


import router from './router'

const head = createHead()

createApp(App).use(head).use(router).mount('#app')