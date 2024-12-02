<template>
  <div id="app" class="font-sans bg-color=white">
    <Navbar />
    <router-view class="pt-28" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>

</style>
