<script>
    import Search from '@/components/homeComponent/Search.vue';
    import description from '@/components/homeComponent/description.vue';
    import books from '@/components/homeComponent/books.vue';


    export default {
        name: 'HomeView',
        components: {
            Search,
            description,
            books
        }
    };
</script>

<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-[600px] text-center text-white" style="background-image: url('../assets/img/bg-img.jpeg')">
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        <h1 class="text-5xl font-extrabold">KREASI KITA</h1>
        <p class="text-lg max-w-xl">
          A platform for creators to market and sell their work, enabling fans to provide ongoing financial support to their favorite creators.
        </p>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          Explore Creations
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="p-6 rounded-lg bg-gray-100 hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-bold mb-2">Support</h3>
          <p class="text-gray-600">Enable creators to thrive with consistent financial support.</p>
        </div>
        <div class="p-6 rounded-lg bg-gray-100 hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-bold mb-2">Creative</h3>
          <p class="text-gray-600">Discover unique creations crafted by passionate creators.</p>
        </div>
        <div class="p-6 rounded-lg bg-gray-100 hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-bold mb-2">Community</h3>
          <p class="text-gray-600">Be part of a growing network of creators and fans.</p>
        </div>
      </div>
    </section>

    <!-- Popular Products Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Popular Creations</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
            <img src="../assets/img/bg-img.jpeg" alt="Product" class="h-40 w-full object-cover rounded-lg">
            <h3 class="mt-4 font-semibold">Romeo & Juliet</h3>
            <p class="text-yellow-500 font-bold mt-2">Rp 100,000</p>
          </div>
          <!-- Repeat for more items -->
        </div>
      </div>
    </section>

    <!-- Featured Creators Section -->
    <section class="py-16 bg-orange-500 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Top Creators</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div class="text-center">
            <img src="../assets/img/bg-img.jpeg" alt="Creator" class="h-24 w-24 rounded-full mx-auto">
            <h3 class="mt-4 font-semibold">Iqbal</h3>
          </div>
          <!-- Repeat for more creators -->
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 bg-gray-800 text-center text-white">
      <div class="max-w-4xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold">Join Kreasi Kita and Empower Creativity!</h2>
        <p class="text-lg text-gray-300">
          Whether you're a creator or a fan, Kreasi Kita is your platform to thrive together in a creative community.
        </p>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
          Register Here
        </button>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>
