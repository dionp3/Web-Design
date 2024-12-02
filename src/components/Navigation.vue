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

    <div class="md:hidden flex flex-col space-y-1 cursor-pointer" @click="toggleMenu">
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
    </div>
  </nav>
</template>

<script >
  export default {
    data() {
      return {
        menuOpen: false,
        isLoggedIn: true, 
        isDropDownOpen: false,
      };
    },
    
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen; 
      },

      toggleDropDown(){
        this.isDropDownOpen = !this.isDropDownOpen;
      },

      logout(){
        alert("Logged out!");
        this.isLoggedIn = false;
        this.isDropdownOpen = false;
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

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>


