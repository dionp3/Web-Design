<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: beige;
  }

  #app {
    margin: 0;
    padding: 0;
  }

  #home, #books, #about {
    padding: 20px;
  }
</style>
