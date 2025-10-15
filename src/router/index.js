import { createRouter, createWebHistory } from 'vue-router' // importing vue-router

// // import pages for routing
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ClassesList from '../views/ClassesList.vue'
import Profile from '@/views/Profile.vue'
import Cart from '@/views/Cart.vue'

// define routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/classes', component: ClassesList },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart }
]

// create router object
const router = createRouter({
    history: createWebHistory(),
    routes
})

// export router for main.js to use
export default router;