<template>
  <nav class="navbar navbar-expand-lg fixed-top shadow-0">
    <div class="container d-flex align-items-center">
      <!-- Return to homepage by clicking on the Company Name -->
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
          <li v-for="link in links" :key="link.text" class="nav-item">
            <router-link class="nav-link px-3 text-dark" :to="link.path">{{ link.text }}</router-link>
          </li>
        </ul>

        <!-- Shopping Cart Icon link -->
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/cart">
            <i class="bi bi-cart3 fs-4"></i>
          </router-link>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Toggle state for collapse menu
const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}

// Nav links as reactive data
const links = [
  { text: 'Home', path: '/' },
  { text: 'Classes', path: '/classes' },
  { text: 'Profile', path: '/profile' },
  { text: 'About Us', path: '/about' }
]
</script>

<style scoped>

.navbar {
  background-color: #ffede7;
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