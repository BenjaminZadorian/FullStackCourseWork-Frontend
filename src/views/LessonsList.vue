<template>
  <div class="container py-5">
    <section class="text-center mb-5">
      <h1 class="text-center mb-4">Available lessons</h1>
      <p class="lead text-muted">Browse through our selection of available lessons and book your spot today!</p>
    </section>

    <!-- Search / Filter -->
    <section class="d-flex justify-content-center mb-4">
      <input type="text" class="form-control w-50 shadow-sm"
        placeholder="Search the name or category of your lessons..." v-model="searchTerm"></input>
    </section>

    <!-- Categories Option -->
    <section class="mb-4 text-center py-2">
      <select class="form-select" v-model="selectedCategory">
        <option value="">All Categories</option>
        <option value="topic">Topic</option>
        <option value="location">Location</option>
        <option value="price">Price</option>
        <option value="spaces">Spaces</option>
      </select>

      <div id="button-group" class="btn-group ms-2" role="group">
        <!-- Ascending Search buttons -->
        <button class="btn btn-outline-secondary" :class="{ active: sortOrder == 'ascending' }"
          @click="sortOrder = 'ascending'" title="Ascending">
          <i class="fa-solid fa-angle-up"></i>
        </button>
        <!-- Descending Search Button -->
        <button class="btn btn-outline-secondary" :class="{ active: sortOrder === 'descending' }"
          @click="sortOrder = 'descending'" title="Descending">
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </section>

    <!-- lessons List -->
    <section class="row gy-4">
      <!-- v-for loop creating all class cards for the lessons that are available -->
      <div class="col-md-4" v-for="classObject in displayedlessons" :key="classObject._id">
        <!-- Main card part -->
        <div id="class-card" class="card h-100 shadow-sm">
          <div id="card-main-body" class="card-body">
            <i :class="classObject.icon"></i>
            <h5 class="card-title">{{ classObject.topic }}</h5>
            <p class="card-text text-muted small">{{ classObject.location }}</p>

            <p class="card-text text-muted small">
              <i class="fa-regular fa-calendar"></i>
              {{ new Date(classObject.date).toLocaleDateString() }}
            </p>

          </div>
          <!-- Pricing and Spaces available -->
          <ul class="list-group list-group-flush">
            <li class="list-group-item">£{{ classObject.price }}</li>
            <li class="list-group-item">Spaces Available : {{ classObject.spaces }}</li>
          </ul>

          <!-- Use conditionals to create a dynamic button -->
          <div class="card-footer text-center bg-white">
            <button id="book-now-btn" class="btn w-100" @click="toggleAddToCartBtn(classObject)"
              :style="user.existsInCart(classObject._id) ? 'background-color: #e06689; color: black;' : 'background-color: #9D8189; color: white;'">
              <!-- Use v-if to change the text within the button depending on if its in the cart or is full yet -->
              <span v-if="classObject.spaces === 0 && !user.existsInCart(classObject._id)"
                style="opacity: 0.5; cursor: not-allowed;">Full</span>
              <span v-else-if="user.existsInCart(classObject._id)" style="">Remove from Cart</span>
              <span v-else>Add to Cart</span>
            </button>

            <!-- Delete lesson button -->
            <button class="btn w-100 mt-2" @click="deleteLesson(classObject._id)" style="background-color: #e06689; color: white;">
              <i class="fa-solid fa-trash"></i> Delete Lesson
            </button>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style>
#class-card,
.list-group-item {
  background-color: #f9f9f9;
}

#button-group {
  padding-top: 20px;
}

#book-now-btn {
  background-color: #9D8189;
  color: white;
}
</style>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'

// inject store into so that the shop can be manipulated
const store = inject("store");
// inject user to update the users cart
const user = inject("user");

// This will hold lessons fetched from the backend from implement MongoDB
const lessons = computed(() => store.stock);
const loading = ref(true);

onMounted(async () => {
  store.refreshStock();
  loading.value = false;
});

//

// Variables for searching and filtering lessons
const searchTerm = ref('')
const selectedCategory = ref('')

// Can be either ascending or descending
const sortOrder = ref('ascending')

const displayedlessons = computed(() => {
  // Copy array
  let result = [...lessons.value]

  // If a searchTerm exists, then filter the displayedlessons based on it
  if (searchTerm.value) {
    result = result.filter(a =>
      a.topic.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  }

  if (selectedCategory.value) {
    if (selectedCategory.value == 'topic') {
      result = result.sort((a, b) =>
        a.topic.localeCompare(b.topic))
    }

    if (selectedCategory.value == 'location') {
      result = result.sort((a, b) =>
        a.location.localeCompare(b.location))
    }

    if (selectedCategory.value == 'price') {
      result = result.sort((a, b) =>
        a.price - b.price)
    }

    if (selectedCategory.value == 'spaces') {
      result = result.sort((a, b) =>
        a.spaces - b.spaces)
    }
  }

  if (sortOrder.value == 'descending') {
    result.reverse()
  }

  return result
})

function deleteLesson(id) {
  if (confirm("Are you sure you want to delete this lesson?")) {
    store.deleteLesson(id);
  }
} 

function toggleAddToCartBtn(lessonItem) {
  if (user.existsInCart(lessonItem._id)) {
    user.removeFromCart(lessonItem._id)
    lessonItem.spaces++;
  } else if (lessonItem.spaces > 0) {
    user.addToCart(lessonItem);
    lessonItem.spaces--;
  }
}

</script>