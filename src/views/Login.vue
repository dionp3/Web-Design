<template>
  <div class="flex justify-center items-center min-h-screen bg-orange-500">
    
    <!-- Kontainer Utama -->
    <div class="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg p-6 sm:p-10 max-w-xl sm:max-w-4xl w-full mx-auto">
      
      <!-- Bagian Logo -->
      <div class="flex justify-center items-center mb-6 sm:mb-0 sm:mr-8">
        <img src="@/assets/img/Logo.png" alt="Logo Kreasi Kita" class="p-7 h-40 w-42 hidden sm:block" />
      </div>
      
      <!-- Bagian Form Login -->
      <div class="flex flex-col justify-center w-full sm:w-96">
        <h2 class="text-2xl text-black font-semibold mb-6 text-left">Login</h2>
        
        <!-- Tombol Login dengan Google -->
        <button class="w-full border bg-white text-black py-2 rounded-lg mb-4 flex justify-center items-center hover:bg-gray-200 transition duration-200">
          <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google Icon" class="mr-2" />
          Continue with Google
        </button>

        <div class="text-center text-gray-400 mb-4">Or</div>
        
        <!-- Form Login -->
        <form @submit.prevent="handleLogin">
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
          
          <!-- Tombol Login -->
          <button type="submit" class="w-full bg-[#FFAE00] text-black py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200">
            LOGIN
          </button>
        </form>
        
        <!-- Link Register dan Lupa Password -->
        <p class="text-center mt-4 text-gray-500">
          Don’t have an account?
          <a href="/register" class="text-orange-500 hover:underline">Register</a>
        </p>
        <p class="text-center text-gray-500 mt-2">
          <a href="#" class="text-orange-500 hover:underline">Forgot password?</a>
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
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      // Logika untuk mengirim form login
      console.log('Form login submitted:', this.form);
    }
  }
};
</script>

