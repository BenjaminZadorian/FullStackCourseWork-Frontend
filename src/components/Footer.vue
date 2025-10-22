<template>
    <div id="footer">
        <footer class="text-center text-black">

            <!-- Grid container -->
            <div class="container">
                <!-- Section: Links -->
                <section class="mt-5">
                    <!-- Grid row-->
                    <div class="row text-center d-flex justify-content-center pt-5">
                        <!-- For loop creating all links in footer -->
                        <div v-for="link in links" :key="link.text" class="col-md-2">
                            <h6 class="text-uppercase font-weight-bold">
                                <router-link class="text-black" :to="link.path">{{ link.text }}</router-link>
                            </h6>
                        </div>
                    </div>
                </section>

                <!-- Break to seperate the footer in two -->
                <hr class="my-5" />

                <!-- Section: Text -->
                <section>
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <p id="footer-text">
                                Classly is your trusted platform for discovering and booking after-school classes and activities. We help students explore new skills, from arts and coding to sports and creativity 
                                <br> 
                                all in one simple, easy-to-use place.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    </div>
</template>

<style scoped>

footer {
  background-color: #FFE5D9;
  margin: 0;
  padding: 0;
}
</style>

<script setup>
const links = [
    { text: 'Home', path: '/' },
    { text: 'Register', path: '/register' },
    { text: 'Login', path: '/login' },
    { text: 'Classes', path: '/classes' },
    { text: 'About Us', path: '/about' }
]
</script>