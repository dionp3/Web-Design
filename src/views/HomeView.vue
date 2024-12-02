<script>
import Footer from "@/components/Footer.vue";
import Book from "@/components/Book.vue";

export default {
  name: "HomeView",
  components: {
    Book,
  },
  data() {
    return {
      books: [
        {
          id: "1",
          image: "img_books/romeo_and_juliet.jpg",
          title: "Romeo & Juliet",
          price: "Rp 100.000",
        },
        {
          id: "2",
          image: "img_books/atomic_habits.jpg",
          title: "Atomic Habits",
          price: "Rp 98.500",
        },
        {
          id: "3",
          image: "img_books/to_kill_a_mockingbird.jpg",
          title: "To Kill a Mockingbird",
          price: "Rp 156.000",
        },
        {
          id: "4",
          image: "img_books/thinking_fast_and_slow.jpg",
          title: "Thinking, Fast and Slow",
          price: "Rp 148.000",
        },
        {
          id: "5",
          image: "img_books/rich_dad_poor_dad.jpg",
          title: "Rich Dad Poor Dad",
          price: "Rp 173.938",
        },
      ],
    };
  },
};
</script>



<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative h-screen bg-cover bg-center text-white"
      style="background-image: url('bg1.jpg')"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div
        class="relative flex flex-col items-center justify-center h-full space-y-8 text-center"
      >
        <h1 class="text-4xl md:text-9xl font-bold">
          KREASI KITA
        </h1>
        <h1 class="text-4xl md:text-6xl font-bold">
          Discover, Support, and Create
        </h1>
        <p class="text-lg md:text-xl max-w-2xl">
          Kreasi Kita is your platform to explore amazing creations, support
          talented creators, and become part of a vibrant community.
        </p>
        <button
          @click="$router.push('/books')"
          class="px-6 py-3 bg-[#FDB750] hover:bg-yellow-600 rounded-full text-black font-semibold"
        >
          Explore Now
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gradient-to-r from-orange-500 to-yellow-400 text-center">
      <div class="container mx-auto">
        <h2 class="text-4xl font-extrabold text-white mb-12">What We Offer</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
            <div class="mb-6">
              <span class="text-orange-500 text-3xl font-semibold">&#128075;</span>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Support Creators</h3>
            <p class="text-gray-600">
              Help your favorite creators by providing financial support to continue their amazing work.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
            <div class="mb-6">
              <span class="text-orange-500 text-3xl font-semibold">&#127911;</span>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Explore Creativity</h3>
            <p class="text-gray-600">
              Discover unique creations from talented creators worldwide.
            </p>
          </div>
          <!-- Card 3 -->
          <div class="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 ease-in-out">
            <div class="mb-6">
              <span class="text-orange-500 text-3xl font-semibold">&#128101;</span>
            </div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Join Community</h3>
            <p class="text-gray-600">
              Connect with creators and fans to share and grow your passion.
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- Popular Books Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Popular Books</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <Book
            v-for="(book, index) in books"
            :key="index"
            :id="book.id"
            :image="book.image"
            :title="book.title"
            :price="book.price"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="relative py-16 text-center text-white bg-cover bg-center"
      style="background-image: url('bgImage.jpg')"
    >
      <div class="absolute inset-0 "></div>
      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-4">
          Become Part of Our Creator Community!
        </h2>
        <p class="text-lg mb-8">
          Join Kreasi Kita today and start your journey as a creator or fan.
        </p>
        <button
          @click="$router.push('/register')"
          class="px-6 py-3 bg-[#FDB750] hover:bg-yellow-600 rounded-full text-black font-semibold"
        >
          Register Now
        </button>

      </div>
    </section>

    <!-- Footer Section -->
  </div>
</template>

