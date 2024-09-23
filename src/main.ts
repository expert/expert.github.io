import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './assets/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(MotionPlugin)
app.mount('#app')

import './lib/functional'
