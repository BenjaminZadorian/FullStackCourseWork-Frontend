<template>
  <div class="container py-5">
    <section class="text-center mb-5">
      <h1 class="fw-bold">Your Profile</h1>
      <p class="text-muted">View and update your personal information</p>
    </section>

    <!-- Profile Card -->
    <div class="card mx-auto shadow-sm p-4" style="max-width: 600px;">
      <div class="text-center mb-4">
        <!-- Use an API later to generate a profile picture maybe -->
        <img
          alt="Profile Avatar"
          class="rounded-circle mb-3"
        />
        <h4>{{ userObject.name }}</h4>
        <p class="text-muted">{{ userObject.email }}</p>
      </div>

      <!-- Editable Info Section -->
      <form @submit.prevent="updateProfile">
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input v-model="userObject.name" type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="userObject.email" type="email" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Phone Number</label>
          <input v-model="userObject.phone" type="text" class="form-control" />
        </div>

        <button
          type="submit"
          class="btn w-100 mt-3"
          style="background-color: #9D8189; color: white;"
        >
          Save Changes
        </button>
      </form>
    </div>

    <div class="mt-5 text-center">
      <h4>Your Booked Classes: {{ bookedClasses }}</h4>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const user = inject('user');

const userObject = ref({
  name: user.user.username,
  email: user.user.email,
  phone: user.user.phone,
});

// This must be changed from the user cart -> the user order history, this will be a GET from the 'orders' collection stored in the userData.js
console.log(user.orders);
const bookedClasses = user.orders.length;

function updateProfile() {
  alert("Profile updated");
}
</script>
