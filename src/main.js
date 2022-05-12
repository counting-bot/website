import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'

import router from './router'

const head = createHead()

createApp(App).use(head).use(router).mount('#app')