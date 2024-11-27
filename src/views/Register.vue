<template>
  <div class="flex justify-center items-center min-h-screen bg-orange-500">
    <!-- Kontainer Utama -->
    <div class="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg p-6 sm:p-10 max-w-xl sm:max-w-4xl w-full">
      <!-- Bagian Logo -->
      <div class="flex justify-center items-center mb-6 sm:mb-0 sm:mr-8">
        <!-- Logo (disembunyikan di perangkat kecil) -->
        <img src="@/assets/img/Logo.png" alt="Logo Kreasi Kita" class="p-7 h-40 w-42 hidden sm:block" />
      </div>
      <!-- Bagian Form Register -->
      <div class="w-full sm:w-96">
        <h2 class="text-2xl text-black font-semibold mb-6 text-left">Register</h2>
        <!-- Tombol Login dengan Google -->
        <button class="w-full border bg-white-200 text-black py-2 rounded-lg mb-4 flex justify-center items-center hover:bg-gray-300 transition duration-200">
          <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google Icon" class="mr-2" />
          Continue with Google
        </button>
        <!-- Garis Pemisah -->
        <div class="text-center text-gray-400 mb-4">Or</div>
        <!-- Form Register -->
        <form @submit.prevent="handleSubmit">
          <input
            type="text"
            placeholder="Username"
            class="w-full p-3 mb-3 border rounded-lg text-black focus:outline-none focus:ring focus:ring-orange-300"
            v-model="form.username"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full p-3 mb-3 border rounded-lg text-black focus:outline-none focus:ring focus:ring-orange-300"
            v-model="form.email"
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full p-3 mb-3 border rounded-lg text-black focus:outline-none focus:ring focus:ring-orange-300"
            v-model="form.password"
          />
          <!-- Tombol Register -->
          <button type="submit" class="w-full bg-[#FFAE00] text-black py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200">
            REGISTER
          </button>
        </form>
        <!-- Link Login -->
        <p class="text-center mt-4 text-gray-500">
          Already have an account? 
          <a href="#" class="text-orange-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Logika untuk mengirim form (validasi, dsb.)
      console.log('Form submitted:', this.form);
    }
  }
};
</script>

<style scoped>
/* Atur gambar logo jika perlu */
</style>
