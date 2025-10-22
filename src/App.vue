<script setup>
// inject the StoreData class into the App to be used throughout the project
import { provide } from 'vue';
import { store } from  './storeData'

provide("store", store);
</script>

<template>
  <!-- Put all content in a flexbox so that it keeps the pages size -->
    <div id="app" class="main-content d-flex flex-column min-vh-100">
        <Navbar />

        <main class="flex-fill">
          <RouterView /> <!-- this makes sure that the pages from the router are loaded  -->
        </main>

        <Footer />
    </div>
</template>

<!-- Import navbar component and make it a local tag that can be used in App template-->
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>

html, body, #app {
  height: 100%;
  margin: 0;
}

/* This makes sure that the navbar doesn't cover up any of the stuff 
on the pages that the router is showing */
.main-content {
  padding-top: 70px;
  min-height: 100vh;
}

</style>