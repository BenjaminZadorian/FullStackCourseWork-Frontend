<script setup>
</script>

<template>
    <div id="app">
        <Navbar />
        <RouterView /> <!-- this makes sure that the pages from the router are loaded  -->
    </div>
</template>

<!-- Import navbar component and make it a local tag that can be used in App template-->
<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>

  html, body {
      margin: 0;
      padding: 0;
  }

</style>