<template>

<div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        
        <b-navbar-brand href="#">STUDENT CARDS</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item v-on:click="Home">Home</b-nav-item>
            <b-nav-item v-on:click="About">About</b-nav-item>

            
        </b-navbar-nav>


    </b-navbar>
    <router-view />
</div>
</template>

<script>
export default {
    name: "App",
    methods: {
        About: function () {
            this.$router.replace('about')
        },
        Home: function() {
            this.$router.replace('Home')
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
