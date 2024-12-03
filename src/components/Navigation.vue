<template>
  <nav
    :class="[
      'fixed w-full z-50 flex items-center justify-between p-4 shadow-lg transition-all duration-300',
      isScrolled ? 'bg-transparent text-white' : 'bg-white text-black',
    ]"
  >
    <!-- Logo -->
    <div class="flex items-center space-x-4">
      <router-link to="/" class="w-30 h-12 rounded-full py-2 px-4 hover:bg-white">
        <img src="../assets/img/Logo.png" alt="Logo" class="w-full h-full object-contain" />
      </router-link>
    </div>

    <!-- Navigation Links -->
    <ul
      :class="[menuOpen ? 'block flex-col absolute top-16 right-0 w-full bg-gray-100 py-4 md:py-0 md:bg-transparent' : 'hidden', 'md:flex space-x-6 items-center']"
      class="text-center"
    >
      <li>
        <router-link to="/books" class="text-black rounded-full px-4 hover:text-[#FD7F20] hover:bg-white py-2 md:py-0">Books</router-link>
      </li>
      <li>
        <router-link to="/about" class="text-black rounded-full px-4 hover:text-[#FD7F20] hover:bg-white py-2 md:py-0">About Us</router-link>
      </li>

      <!-- Auth Links -->
      <div v-if="!isLoggedIn" class="flex space-x-2">
        <router-link to="/login" class="bg-white-400 text-black py-2 px-4 rounded-full border-2 border-black hover:bg-[#FFAE00]">Log in</router-link>
        <router-link to="/register" class="bg-[#FFAE00] text-black py-2 px-4 rounded-full border-2 border-black hover:bg-white">Register</router-link>
      </div>
      <div v-else class="relative flex items-center space-x-4">
        <img 
          src="../assets/img/iqbal.png" 
          alt="Profile" 
          class="w-8 h-8 rounded-full hover:shadow-lg"
          @click="toggleDropDown"
        >
        <div 
          v-show="isDropDownOpen"
          class="absolute right-0 mt-40 w-20 bg-white border border-gray-300 rounded-md shadow-lg"
        >
          <ul class="py-1 text-gray-700">
            <li>
              <router-link
                to="/aboutprofile"
                class="block px-4 py-2 hover:text-[#FD7F20] hover:bg-white"
              >
                Profile
              </router-link>
            </li>
            <li>
              <button
                @click="logout"
                class="block w-full text-left px-4 py-2 hover:text-[#FD7F20] hover:bg-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </ul>

    <!-- Mobile Menu Toggle -->
    <div class="md:hidden flex flex-col space-y-1 cursor-pointer" @click="toggleMenu">
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
    </div>
  </nav>
</template>




<script>
export default {
  data() {
    return {
      menuOpen: false,
      isLoggedIn: true,
      isDropDownOpen: false,
      isScrolled: false, // Tracks scroll state
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    },

    logout() {
      alert("Logged out!");
      this.isLoggedIn = false;
      this.isDropDownOpen = false;
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 0; // Detect scroll
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>



<style scoped>
nav {
  transition: background-color 0.3s, color 0.3s;
}
</style>



