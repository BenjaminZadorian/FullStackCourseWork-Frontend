import { createRouter, createWebHistory } from 'vue-router' // importing vue-router

// // import pages for routing
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ClassesList from '../views/ClassesList.vue'
import Profile from '../views/Profile.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

// define routes
const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/about', name: "About", component: About },
    { path: '/classes', name: "Classes", component: ClassesList },
    { path: '/profile', name: "Profile", component: Profile },
    { path: '/cart', name: "Cart", component: Cart },
    { path: '/register', name: "Register", component: Register},
    { path: '/login', name: "Login", component: Login}
]

// create router object
const router = createRouter({
    history: createWebHistory(),
    routes
})

// export router for main.js to use
export default router;