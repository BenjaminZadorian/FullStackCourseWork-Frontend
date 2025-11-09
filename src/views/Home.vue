<template>
  <div class="home-page">
    <section class="hero d-flex justify-content-center align-items-center text-center">
      <div class="hero-content p-5">
        <h1 class="display-4 fw-bold">Classly After School Activites</h1>
        <p class="lead mt-3">
          Find and book fun lessons for students of all ages — from coding and art to sports and music.
        </p>
        <!-- Button linking to all lessons -->
        <router-link to="/lessons" class="btn btn-lg mt-4 px-5" id="lesson-btn" style="background-color: #FFCAD4;">Browse lessons</router-link>
      </div>
    </section>

    <!-- Section about why to choose Classly -->
     <section class="container my-5 text-center">
      <h2 class="mb-4 fw-semibold">Why Choose Classly?</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-book fs-1 text-primary mb-3"></i>
              <h5 clas="card-title">Engage in Interactive Learning</h5>
              <span>
                Book lessons that focus on creating a deep focus environment.
              </span>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-people fs-1 text-success mb-3"></i>
              <h5 clas="card-title">For Students & Parents</h5>
              <span>
                Simple and easy-to-use booking system designed for both students and parents.
              </span>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-laptop fs-1 text-warning mb-3"></i>
              <h5 clas="card-title">Easy Booking</h5>
              <span>
                An intuitive booking platform that works across all different devices
              </span>
            </div>
          </div>
        </div>
      </div>
     </section>

  </div>
</template>

<script setup>
</script>