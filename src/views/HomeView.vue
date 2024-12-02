<script>
    import Search from '@/components/homeComponent/Search.vue';
    import description from '@/components/homeComponent/description.vue';
    // import books from '@/components/homeComponent/books.vue';
    import book from '@/components/Book.vue';


    export default {
        name: 'HomeView',
        components: {
            Search,
            description,
            book
        },

        data(){
          return{
            books: [
              {
                id: '1',
                image: 'img_books/romeo_and_juliet.jpg',
                title: 'Romeo & Juliet',
                price: 'Rp 100.000'
              },
              {
                id: '2',
                image: 'img_books/atomic_habits.jpg',
                title: 'Atomic Habits',
                price: 'Rp 98.500'
              },
              {
                id: '3',
                image: 'img_books/to_kill_a_mockingbird.jpg',
                title: 'To Kill a Mockingbird',
                price: 'Rp 156.000'
              },
              {
                id: '4',
                image: 'img_books/thinking_fast_and_slow.jpg',
                title: 'Thinking, Fast and Slow',
                price: 'Rp 148.000'
              },
              {
                id: '5',
                image: 'img_books/rich_dad_poor_dad.jpg',
                title: 'Rich Dad Poor Dad',
                price: 'Rp 173.938'
              },
            ]
          }
        }
        
    };
</script>

<template>
    <div>
      <section class="relative py-12 px-4" style="background-image: url('bg1.jpg')">
        <div class="absolute inset-0 bg-white opacity-80"></div>
        <div class="flex justify-center relative flex-col md:flex-row items-center md:space-x-20 mb-12">
          <img src="@/assets/img/Logo.png" alt="Kreasi Kita" class="h-40 mt-40 mb-0 md:mb-0" />
          <div class="text-center md:text-left max-w-lg">
            <p class="text-lg text-justify text-gray-600 mt-40 mb-0">
              Kreasi Kita is a platform for creators to market and sell their work, while allowing fans to provide ongoing financial support to their favorite creators. In this way, creators can earn revenue directly from fans, which support them to continue creating.
            </p>
          </div>
        </div>
        <div class="flex justify-center relative flex-col gap-20 md:flex-row items-center md:space-x-8 mb-12">
          <button class="mt-8 bg-[#FDB750] hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full">
            Explore Creations ➜
          </button>
        </div>
      </section>
    </div>
    
    <div>
      <section class="flex justify-around bg-red-500 text-white py-4">
        <button class="font-semibold">Support</button>
        <button class="font-semibold">Creative</button>
        <button class="font-semibold">Community</button>
      </section>
    </div>
      
    <div>
      <section class="relative py-12 px-4 bg-white opacity-80" style="background-image: url('bgImage.jpg')">
        <div class="flex overflow-x-auto gap-4">
          <div class="min-w-full bg-white rounded-lg shadow p-4 mt-40 mb-40 text-center">
            <h2 class="text-2xl text-black font-bold text-left mb-8">Populer</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
              <book 
                v-for="(book, index) in books" 
                :key="index"
                :id="book.id"
                :image="book.image"
                :title="book.title"
                :price="book.price"/>
            </div>
          </div>
          <!-- Repeat for other book items -->
        </div>
      </section>
    </div>
    
    <div>
      <section class="bg-orange-500 text-white py-12 px-4">
        
        <h2 class="text-2xl font-semibold text-black text-left mb-8">Creator</h2>
        <div class="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
          <img :src="image" alt="creator cover" class="h-80 w-full object-fill rounded-md mb-4" />
          <h3 class="text-lg font-semibold text-gray-800 mb-2"></h3>
          <p class="text-gray-600 text-sm"></p>
        </div>
        <!-- <div class="flex overflow-x-auto gap-4">
          <div class="min-w-[100px] flex flex-col items-center">
            <img src="../assets/img/bg-img.jpeg" alt="Creator" class="h-24 w-24 rounded-full" />
            <p class="mt-4 font-semibold">Aj</p>
          </div> -->
          <!-- Repeat for other creators -->
        <!-- </div> -->
      </section>
    </div>

    <div>
      <!-- Join Section -->
      <section class="relative py-12 text-center" style="background-image: url('bg1.jpg')">
        <div class="absolute inset-0 bg-white opacity-80"></div>
        <div class="flex justify-center relative flex-col gap-20 md:flex-row items-center md:space-x-8 mb-5">
          <h2 class="text-2xl text-[#FD7F20] font-bold mt-8 mb-8">Join Kreasi Kita and be part of the creator and fan community!</h2>
        </div>
        <div class="flex justify-center relative flex-col gap-20 md:flex-row items-center md:space-x-8 mb-5">
          <button class="mt-8 mb-8 bg-[#FDB750] hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full">
            Register here ➜
          </button>
        </div>
      </section>
    </div>
      <!-- Footer Component -->
      <Footer />
</template>
