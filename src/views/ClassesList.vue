<template>
  <div class="container py-5">
    <section class="text-center mb-5">
      <h1 class="text-center mb-4">Available Classes</h1>
      <p class="lead text-muted">Browse through our selection of available classes and book your spot today!</p>
    </section>

    <!-- Search / Filter -->
    <section class="d-flex justify-content-center mb-4">
      <input type="text" class="form-control w-50 shadow-sm"
        placeholder="Search the name or category of your lessons..." v-model="searchTerm"></input>
    </section>

    <section class="col-md-3 mb-4">
      <select class="form-select" v-model="selectedCategory">
        <option value="">All Categories</option>
        <option value="Subject">Subject</option>
        <option value="Location">Location</option>
        <option value="Price">Price</option>
        <option value="Spaces">Spaces</option>
      </select>

      <div class="btn-group" role="group">
        <!-- Ascending Search buttons -->
        <button class="btn btn-outline-secondary" :class="{ active: sortOrder == 'ascending' }"
          @click="sortOrder = 'ascending'" title="Ascending">
          <i class="fa-solid fa-angle-up"></i>
        </button>
        <!-- Descending Search Button -->
        <button class="btn btn-outline-secondary" :class="{ active: sortOrder === 'desc' }" @click="sortOrder = 'desc'"
          title="Descending">
          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </section>

    <!-- Classes List -->
     <section class="row gy-4">
      <!-- For loop creating all class cards for the classes that are available -->
      <div class="col-md-4" v-for="classObject in classes" :key="classObject.id">
        <!-- Main card part -->
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <i :class="classObject.icon"></i>
            <h5 class="card-title">{{ classObject.Subject }}</h5>
            <p class="card-text text-muted small">{{ classObject.Location }}</p>
          </div>
          <!-- Pricing and Spaces available -->
          <ul class="list-group list-group-flush">
            <li class="list-group-item">£{{ classObject.Price }}.00</li>
            <li class="list-group-item">Spaces Available : {{ classObject.Spaces }}</li>
          </ul>
          <div class="card-footer text-center bg-white">
            <button class="btn w-100 btn-primary">Book Now</button>
          </div>
        </div>
      </div>
     </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Variables for searching and filtering lessons
const searchTerm = ref('')
const sortOrder = ref('ascending')
const selectedCategory = ref('')

// Temp test data for classes before backend is implemented
  const classes = ref([
    { id: 1, Subject: 'Music', Location: 'London', Price: 10.00, Spaces: 5, icon: 'fa-solid fa-music' },
    { id: 2, Subject: 'Art', Location: 'Manchester', Price: 12.00, Spaces: 8, icon: 'fa-solid fa-paintbrush'},
    { id: 3, Subject: 'Cooking', Location: 'Birmingham', Price: 15.00, Spaces: 6, icon: 'fa-solid fa-utensils' },
    { id: 4, Subject: 'Religious', Location: 'Leeds', Price: 8.00, Spaces: 7, icon: 'fa-solid fa-cross' },
    { id: 5, Subject: 'Photography', Location: 'Liverpool', Price: 20.00, Spaces: 5, icon: 'fa-solid fa-camera' },
    { id: 6, Subject: 'Gym', Location: 'Newcastle', Price: 18.00, Spaces: 6, icon: 'fa-solid fa-dumbbell'},
    { id: 7, Subject: 'Programming', Location: 'Sheffield', Price: 25.00, Spaces: 9, icon: 'fa-solid fa-code'},
    { id: 8, Subject: 'Writing', Location: 'Bristol', Price: 14.00, Spaces: 10, icon: 'fa-solid fa-pen-nib'},
    { id: 9, Subject: 'Design & Technology', Location: 'Nottingham', Price: 11.00, Spaces: 5, icon: 'fa-solid fa-object-ungroup'},
    { id: 10, Subject: 'History', Location: 'Cardiff', Price: 9.00, Spaces: 7, icon: 'fa-solid fa-landmark' }
  ])

</script>

<!--  
there should be at least 10 lessons, and each lesson should have 5
spaces (or availability) -- DONE

each lesson should have at least (5%): Subject (1%), Location (1%),
Price (1%), Spaces (or availability: this indicates how many spaces are
left) (1%), a Font Awesome icon (or an Image) (1%) -- DONE

v-for must be used for the display of the lesson list

SORTING FUNCTIONALITY
-------------------------
the user can choose to sort the lessons by one of the following attributes
(8%): subject (2%), location (2%), price (2%), or spaces (i.e. availability)
(2%)

there must be an option to sort in ascending or descending order (order
dependent on the sorting attribute selected), which should work for each
of the attributes (2%)

 -->