<template>
  <div class="container py-5">
    <section class="text-center mb-4">
      <h1>Create Account</h1>
      <p class="text-muted">Register to start booking classes</p>
    </section>

    <form @submit.prevent="handleRegister" class="mx-auto" style="max-width: 400px;">
      <div class="mb-3">
        <label class="form-label">Desired Username</label>
        <input v-model="name" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>

      <button type="submit" class="btn w-100 mt-3" style="background-color: #9D8189; color: white;">Register</button>

      <p class="mt-3">
        Already have an account?
        <router-link to="/login">Login here</router-link>.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = inject('store')

const name = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  if (name.value && email.value && password.value) {
    // login after "register"
    store.login(name.value)
    router.push('/')
  } else {
    alert('Please fill all fields correctly.')
  }
}
</script>
