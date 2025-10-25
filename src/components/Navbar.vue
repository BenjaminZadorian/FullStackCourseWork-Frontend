<template>
  <nav class="navbar navbar-expand-lg fixed-top shadow-0">
    <div class="container d-flex align-items-center">
      <!-- Return to homepage by clicking on the Brand name -->
      <router-link class="navbar-brand fw-bold text-uppercase" to="/">Classly</router-link>

      <!-- Create menu button on smaller screens -->
      <button class="navbar-toggler ps-0" type="button" aria-label="Toggle navigation" @click="toggleMenu">
        <span class="d-flex justify-content-start align-items-center">
          <i class="bi bi-list fs-3"></i>
        </span>
      </button>

      <!-- Collapsible Menu -->
      <div class="collapse navbar-collapse" :class="{ show: isOpen }">
        <!-- Navbar Links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Use v-for loop to printout all navbar links with their respective names and routes-->
          <li v-for="link in filteredLinks" :key="link.text" class="nav-item">
            <router-link class="nav-link px-3 text-dark" :to="link.path">{{ link.text }}</router-link>
          </li>
          <!-- Add a logout button if the user is logged in -->
          <li v-if="store.user.isLoggedIn" class="nav-item" @click="logout">
            <router-link class="nav-link px-3 text-dark">Logout</router-link>
          </li>

          <router-link class="nav-link px-3 text-dark" style="font-weight: bold;">{{ store.user.name }}</router-link>

        </ul>

        <!-- Shopping Cart Icon link -->
        <!-- V-If to check if there is an item in the cart -->
        <!-- must check the current view route, if in cart to=/classes, if classes to=/cart -->
        <li class="nav-item">
          <router-link v-if="store.cartCount > 0" class="nav-link text-dark"
            :to="route.name === 'Classes' ? '/cart' : '/classes'">
            <i class="bi bi-cart3 fs-4">{{ cartCount }}</i>
          </router-link>
          <router-link v-else class="nav-link text-dark" style="opacity: 0.5; cursor: not-allowed;">
            <i class="bi bi-cart3 fs-4">{{ cartCount }}</i>
          </router-link>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject, computed} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();

// inject store into navbar so that I can display the counter for how many items are in the cart
const store = inject("store");

// get cart count
const cartCount = computed(() => store.cartCount);

// Toggle state for collapse menu
const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}

function logout() {
  store.logout();
}

// Function to remove login and register links when the user is lgoged in on the page
const filteredLinks = computed(() => {
  if (store.user.isLoggedIn) {
    return links.filter(link => link.text !== 'Login' && link.text !== 'Register')
  }

  return links.filter(link => link.text !== 'Profile')
})

// Nav links as reactive data
const links = [
  { text: 'Home', path: '/' },
  { text: 'Classes', path: '/classes' },
  { text: 'Register', path: '/register' },
  { text: 'Login', path: '/login' },
  { text: 'Profile', path: '/profile' },
  { text: 'About Us', path: '/about' }
]


</script>

<style scoped>

.navbar {
  background-color: #FFE5D9;
}

.navbar-brand {
  font-weight: 600;
  letter-spacing: 1px;
}
.nav-link {
  font-size: 1rem;
}
.nav-link:hover {
  text-decoration: underline;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler-icon,
.bi-list {
  color: #000;
}
</style>