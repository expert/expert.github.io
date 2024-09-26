import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/index.css'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app
  .use(router)
  .use(MotionPlugin)
  .mount('#app')

import './lib/functional'
