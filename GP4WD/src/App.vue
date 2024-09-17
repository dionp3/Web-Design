<template>
  <div id="app">
    <Navbar />
    <router-view /> 
  </div>
</template>

<script>
import Navbar from "./components/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navbar,
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

div {
  color: rgb(255, 174, 0);
}

#app {
  padding: 20px;
}

#home, #books, #about {
  padding: 20px;
}
</style>
