<template>
  <div class="container py-5">
    <section class="text-center mb-4">
      <h1>Login</h1>
      <p class="text-muted">Access your account to continue</p>
    </section>

    <form @submit.prevent="handleLogin" class="mx-auto" style="max-width: 400px;">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input v-model="username" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>

      <button type="submit" class="btn w-100 mt-3" style="background-color: #9D8189; color: white;">Login</button>

      <p class="mt-3">
        Don’t have an account?
        <router-link to="/register">Register here</router-link>.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = inject('store')

const username = ref('')
const password = ref('')

function handleLogin() {
  // (For now, fake login)
  if (username.value && password.value) {
    store.login(username.value)
    router.push('/cart') // or redirect to home
  } else {
    alert('Please enter valid credentials.')
  }
}
</script>
