<template>
  <div class="container py-5">
    <section class="text-center mb-4">
      <h1>Login</h1>
      <p class="text-muted">Access your account to continue</p>
    </section>

    <!-- username input -->
    <form @submit.prevent="handleLogin" class="mx-auto" style="max-width: 400px;">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input v-model="username" type="text" class="form-control" required />
      </div>

      <!-- password input -->
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
import { loginUser } from '../backendApi.js';

const router = useRouter()
const user = inject('user');

const username = ref('')
const password = ref('')

async function handleLogin() {

  if (username.value && password.value) {
    
    const loginCheck = await loginUser(username.value, password.value);

    if (!loginCheck || !loginCheck.user) {
      alert("Invalid login");
      return;
    }    

    user.login(loginCheck.user.username, loginCheck.user.email, loginCheck.user.phone);

    console.log("User logged in:", loginCheck);

    router.push('/')
  } else {
    alert('Please enter valid credentials.')
  }
}
</script>
