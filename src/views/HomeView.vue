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
    <div class="bg-gray-100">
      <section class="relative bg-cover bg-center h-[500px] text-center text-white" style="background-image: url('../assets/img/bg-img.jpeg')">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative z-10 p-8">
          <h1 class="text-4xl font-bold">KREASI KITA</h1>
          <p class="mt-4 max-w-lg mx-auto">
            Kreasi Kita is a platform for creators to market and sell their work, while allowing fans to provide ongoing financial support to their favorite creators.
          </p>
          <button class="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full">
            Explore Creations
          </button>
        </div>
      </section>
    
      <section class="flex justify-around bg-red-500 text-white py-4">
        <button class="font-semibold">Support</button>
        <button class="font-semibold">Creative</button>
        <button class="font-semibold">Community</button>
      </section>
  
      <section class="py-12 px-4">
        <h2 class="text-2xl font-semibold text-center mb-8">Populer</h2>
        <div class="flex overflow-x-auto gap-4">
          <div class="min-w-[200px] bg-white rounded-lg shadow p-4 text-center">
            <img src="../assets/img/bg-img.jpeg" alt="Book" class="h-40 w-auto mx-auto" />
            <h3 class="mt-4 font-semibold">Romeo & Juliet</h3>
            <p class="text-gray-600">Rp 100,000</p>
          </div>
          <!-- Repeat for other book items -->
        </div>
      </section>
  
      <section class="bg-orange-500 text-white py-12 px-4">
        <h2 class="text-2xl font-semibold text-center mb-8">Creator</h2>
        <div class="flex overflow-x-auto gap-4">
          <div class="min-w-[100px] flex flex-col items-center">
            <img src="../assets/img/bg-img.jpeg" alt="Creator" class="h-24 w-24 rounded-full" />
            <p class="mt-4 font-semibold">Aj</p>
          </div>
          <!-- Repeat for other creators -->
        </div>
      </section>
  
      <!-- Join Section -->
      <section class="py-12 text-center">
        <h2 class="text-2xl font-semibold">Join Kreasi Kita and be part of the creator and fan community!</h2>
        <button class="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full">
          Register here
        </button>
      </section>
  
      <!-- Footer Component -->
      <Footer />
    </div>
</template>