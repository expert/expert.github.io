import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'
import './assets/index.css'
import router from './router'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app
  .use(router)
  .use(MotionPlugin)
  .use(pinia)
  .mount('#app')

import './lib/functional'
