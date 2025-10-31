<template>
  <div class="container py-5">
    <section class="text-center mb-4">
      <h1>Create Account</h1>
      <p class="text-muted">Register to start booking classes</p>

      <div class="alert small mx-auto" style="max-width: 400px; background-color: #D8E2DC; color: black;">
        <p style="font-weight: bold;">Requirements</p>
        <ul>
            <li>Name must contain only letters & spaces</li>
            <li>Email must be a valid email address</li>
            <li>Password must be between 8 - 13 characters</li>
        </ul>
      </div>

    </section>

    <form @submit.prevent="handleRegister" class="mx-auto" style="max-width: 400px;">

    <!-- Username input -->
      <div class="mb-3">
        <label class="form-label">Desired Username</label>
        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid' :  nameError}" required />
      </div>

    <!-- Email input -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" :class="{ 'is-invalid' : emailError}" required />
      </div>

    <!-- Phone number input -->
     <div class="mb-3">
      <label class="form-label">Phone Number</label>
      <input v-model="phone" type="tel" class="form-control" :class="{ 'is-invalid' : phoneError}" required />
     </div>

    <!-- Password input -->
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" :class="{ 'is-invalid' : passwordError}" required />
      </div>

    <!-- Login button -->
      <button type="submit" class="btn w-100 mt-3" style="background-color: #9D8189; color: white;">Register</button>


      <!-- Validation Message -->

      <div v-if="formErrorMessage" class="alert alert-danger mt-3 text-center">
        {{ formErrorMessage }}
      </div>

      <!-- Re-route to the login page -->
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

// Variables for what the user inputs
const name = ref('')
const email = ref('')
const password = ref('')
const phone = ref('');

// Variable for the error messages if the input is not valid
const formErrorMessage = ref('')

// Regex patterns for the validation
const nameRegex = /^[A-Za-z\s]+$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[0-9]{10,15}$/

function handleRegister() {

    formErrorMessage.value = '';

    if (!name.value.match(nameRegex)) {
        formErrorMessage.value = 'Name must contain letters only.'
        return
    }

    if (!emailRegex.test(email.value)) {
        formErrorMessage.value = 'Please enter a valid email address.';
        return
    }

    if (password.value.length < 8 || password.value.length > 13) {
        formErrorMessage.value = 'Password must be between 8 and 13 characters'
        return
    }

    if (!phoneRegex.test(phone.value)) {
      formErrorMessage.value = 'Please enter a valid phone number (10 - 15 digits)'
      return
    }

    if (!formErrorMessage.value) {
        store.login(name.value, password.value, email.value, phone.value)
        router.push('/')
    }
}
</script>
