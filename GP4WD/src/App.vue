<template>
  <div id="app">
    <Navbar />
    <div id="home">
      <h1>Welcome to Home</h1>
    </div>
    <div id="books">
      <h1>Books Section</h1>
    </div>
    <div id="about">
      <h1>About Us Section</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navigation.vue";

export default {
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

#home, #books, #about {
  padding: 20px;
}
</style>
