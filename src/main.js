import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router/index.js' // import the router object

// make sure web uses the router
createApp(App).use(router).mount('#app')
