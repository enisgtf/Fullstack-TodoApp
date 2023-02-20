import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style.css'
import axios from 'axios'
import App from './App.vue'
import router from './router'


/* axios config */
axios.defaults.baseURL = 'http://localhost:5001'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
