import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // importing vue-router
import './assets/style.css'
import App from './App.vue'

// import pages for routing
import Home from './views/Home.vue'
import About from './views/About.vue'
import ClassesList from './views/ClassesList.vue'

// define routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/classes', component: ClassesList }
]

// create router object
const router = createRouter({
    history: createWebHistory(),
    routes
})

// make sure web uses the router
createApp(App).use(router).mount('#app')
