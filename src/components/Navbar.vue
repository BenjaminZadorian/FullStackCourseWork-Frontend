<template>
    <!-- 
     
    Keep just incase allowed to use BootstrapVue

    <b-container>
        <b-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/classes">Classes List</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
    </b-container> -->

    <nav class="navbar navbar-expand-lg shadow-sm">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Logo Here</router-link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/classes">Classes List</router-link>
                </li>
                <li>
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>

    .navbar {
        background-color: #4f5458; /* Dark background color */
    }

    .nav-link{
        color: #d1c8c8; /* White text color */
        position: relative;
    }

    .nav-link:hover {
        color: #ffffff; /* Slightly lighter white on hover */
        background-color: #7b8083
    }

    .nav-link::after {
        content: '';
        opacity: 0;
        transition: all 0.2s;
        height: 2px;
        width: 100%;
        background-color: #6ffff8;
        position: absolute;
        bottom: 0;
        left: 0;
    }    

    .nav-link:hover::after {
        opacity: 1;
    }
    
</style>