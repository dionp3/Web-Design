<template>
  <nav class="bg-white text-black fixed w-full z-50 flex items-center justify-between p-4 shadow-lg">
    <div class="flex items-center space-x-4">
      <router-link to="/" class="w-30 h-12 hover:bg-white">
        <img src="../assets/img/Logo.png" alt="Logo" class="w-full h-full object-contain" />
      </router-link>
    </div>

    <div class="w-1/3">
      <input
        type="text"
        placeholder="Search..."
        class="w-full p-2 rounded-full bg-gray-200 border-2 border-black text-black focus:outline-none focus:ring focus:ring-yellow-400"
      />
    </div>

    <ul
      :class="[menuOpen ? 'block flex-col absolute top-16 right-0 w-full bg-gray-100 py-4 md:py-0 md:bg-transparent' : 'hidden', 'md:flex space-x-6 items-center']"
      class="text-center"
    >
    <li><router-link to="/books" class="hover:text-[#FD7F20] hover:bg-white py-2 just md:py-0">Books</router-link></li>
    <li><router-link to="/categories" class="hover:text-[#FD7F20] hover:bg-white py-2 md:py-0">Categories</router-link></li>
    <li><router-link to="/about" class="hover:text-[#FD7F20] hover:bg-white py-2 md:py-0">About Us</router-link></li>

    <!-- Tampilkan Login/Register jika belum login -->
    <div v-if="!isLoggedIn" class="flex space-x-2">
      <router-link to="/login" class="bg-white-400 text-black py-2 px-4 rounded-full border-2 border-black hover:bg-[#FFAE00]">Log in</router-link>
      <router-link to="/register" class="bg-[#FFAE00] text-black py-2 px-4 rounded-full border-2 border-black hover:bg-white">Register</router-link>
    </div>

      <!-- Tampilkan icon profil jika sudah login -->
      <div v-else class="flex items-center space-x-4">
        <router-link to="/aboutprofile">
          <img src="../assets/img/iqbal.png" alt="Profile" class="w-8 h-8 rounded-full hover:shadow-lg"/>
        </router-link>
      </div>


    </ul>

    <div class="md:hidden flex flex-col space-y-1 cursor-pointer" @click="toggleMenu">
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
    </div>
  </nav>
</template>

<script >
// import { onMounted, onUnmounted, ref } from 'vue';

// const menuOpen = ref(false);  // Use ref for reactivity
// const isLoggedIn = ref(true);  // If you want to track the logged-in state

// const toggleMenu = () => {
//   menuOpen.value = !menuOpen.value;  // Access the value with .value
// }

// const checkScreenWidth = () => {
//   if (window.innerWidth >= 768) {
//     menuOpen.value = false;  // Access the value with .value
//   }
// }

// onMounted(() => {
//   window.addEventListener('resize', checkScreenWidth);
// });

// // Clean up the event listener on unmount
// onUnmounted(() => {
//   window.removeEventListener('resize', checkScreenWidth);
// });

export default {
  data() {
    return {
      menuOpen: false,
      isLoggedIn: true, // Set to true if user is logged in
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; 
    },
    checkScreenWidth() {
      if (window.innerWidth >= 768) {
        this.menuOpen = false;
      }
    },
  },
  created() {
    this.checkScreenWidth();
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenWidth);
  },
  beforeUnmount() { // Vue 3 syntax
    window.removeEventListener('resize', this.checkScreenWidth);
  },
};


</script>

<style scoped>
nav {
  transition: all 0.3s ease-in-out;
}
</style>


