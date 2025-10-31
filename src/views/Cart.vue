<template>
  <div class="container py-5">
    <!-- Shopping Cart div -->
    <div>
      <section class="text-center mb-5">
        <h1>Your Cart</h1>
      </section>

      <!-- Displaying all booked classes -->
      <section class="row gy-4">

        <div class="col-md-4" v-for="classObject in store.cart" :key="classObject.id">

          <div id="class-card" class="card h-100 shadow-sm">
            <div id="card-main-body" class="card-body">
              <i :class="classObject.icon"></i>
              <h5 class="card-title">{{ classObject.Subject }}</h5>
              <p class="card-text text-muted small">{{ classObject.Location }}</p>
            </div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">£{{ classObject.Price }}.00</li>
              <li class="list-group-item">Spaces Available : {{ classObject.Spaces }}</li>
            </ul>

            <div class="card-footer text-center bg-white">
              <button id="remove-class-btn" class="btn w-100"
                @click="store.removeFromCart(classObject.id); classObject.Spaces++"
                style="background-color: #e06689; color: black;">
                <span>Remove from Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Checkout div -->
    <div class="mt-5">
      <section class="text-center mb-5">
        <h1>Checkout</h1>
      </section>

      <!-- Button for the persons name -->
      <div class="p-4 border rounded shadow-sm bg-light">
        <form @submit.prevent="handleCheckout">
          <div class="mb-3 text-start">
            <label for="fullName" class="form-label">Full Name</label>
            <input
            id="fullName"
            v-model.trim="fullName"
            type="text"
            class="form-control"
            placeholder="Enter your full name"
            required
            />
            <div v-if="fullNameError" class="text-danger small mt-1">
              {{ fullNameError }}
            </div>
          </div>

          <!-- Button for the persons phone number -->
          <div class="mb-3 text-start">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input
            id="phoneNumber"
            v-model.trim="phoneNumber"
            type="tel"
            class="form-control"
            placeholder="Enter your phone number"
            required
            />

            <div v-if="phoneError" class="text-danger small mt-1">
              {{ phoneError }}
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-success w-100" :disabled="!isFormValid || store.cartCount === 0">
              Confirm Checkout
            </button>

            <!-- msg to inform the user that the cart is empty -->
            <span v-if="store.cartCount === 0" class="text-muted small">
              Your Cart is Empty
            </span>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, inject, onMounted, watch} from 'vue'

// Variables for the regex to check the input information
const fullNameRegex = /^[A-Za-z\s]+$/; // Only allows letters and spaces
const phoneNumberRegex = /^\d+$/; // Only alows digits

const store = inject("store");

// variables for the form
const fullName = ref("");
const phoneNumber = ref("");

// Variables for validating
const fullNameError = ref("");
const phoneError = ref("");

// Auto fill in the phone and name if there is a logged in user
onMounted(() => {
  if (store.user.isLoggedIn) {
    fullName.value = store.user.name || "";
    phoneNumber.value = store.user.phone || "";
  }
});

// Check if anything changes with the logged in user so that the variables can be changed
watch(
  () => store.user,
  (newUser) => {
    if (newUser.isLoggedIn) {
      fullName.value = newUser.name || "";
      phoneNumber.value = newUser.phone || "";
    } else {
      fullName.value = "";
      phoneNumber.value = "";
    }
  },
  { deep: true }
);

// Validate the full name and make sure that it is 2 words
function validateName() {
  if (!fullName.value.trim()) {
    fullNameError.value = "Full name is required";
  } 
  // check against the regex
  else if (!fullNameRegex.test(fullName.value.trim())) {
    fullNameError.value = "Name can contain letters and spaces only";
  }
  // Check that 2 names have been given in the input slot
  else if (fullName.value.trim().split(" ").length < 2) {
    fullNameError.value = "Please enter both your first and last name"
  }
  else {
    fullNameError.value = "";
  }
}

function validateNumber() {
  if (!phoneNumber.value.trim()) {
    phoneError.value = "Phone number is required";
  }
  // check against regex
  else if (!phoneNumberRegex.test(phoneNumber.value.trim())) {
    phoneError.value = "Phone number must contain digits only"
  } 
  // check its not too long or not too short
  else if (phoneNumber.value.trim().length < 10 || phoneNumber.value.trim().length > 15) {
    phoneError.value = "Phone number must be between 10 and 15 digits";
  } else {
    phoneError.value = "";
  }

}

const isFormValid = computed(() => {
  if (store.user.isLoggedIn) {
    validateName();
    validateNumber();
    return !fullNameError.value && !phoneError.value;
  }
});

function handleCheckout() {
  validateName();
  validateNumber();
  if (isFormValid.value == false) {
    return;
  }

  // after checkout is valid, clear the cart and empty the input forms
  alert(`Thank you for your purchase ${fullName.value}, have a nice day!`)
  store.cart = [];
  fullName.value = "";
  phoneNumber.value = "";
}

</script>
