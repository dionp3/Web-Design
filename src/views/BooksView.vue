<template>
  <div class="container mx-auto p-6 bg-white">
    <!-- Search Bar -->
    <div class="flex justify-center mt-20 mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for books..."
        class="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <!-- Book List -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6">
      <Book
        v-for="(book, index) in filteredBooks"
        :key="index"
        :id="book.id"
        :image="book.image"
        :title="book.title"
        :price="book.price"
      />
    </div>
  </div>
</template>
  
<script>
  import Book from "../components/Book.vue"
  export default {
    name: 'BooksView',

    components: {
      Book
    },

    data(){
      return{
        searchQuery: "",
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
          {
            id: '6',
            image: 'img_books/the_catcher_in_the_rye.jpg',
            title: 'The Catcher in the Rye',
            price: 'Rp 127.640'
          },
          {
            id: '7',
            image: 'img_books/the_silent_patient.jpg',
            title: 'The Silent Patient',
            price: 'Rp 79.200'
          },
          {
            id: '8',
            image: 'img_books/mans_search_for_meaning.jpg',
            title: "Man's Search for Meaning",
            price: 'Rp 67.150'
          },
          {
            id: '9',
            image: 'img_books/crushing_it.jpg',
            title: "Crushing IT",
            price: 'Rp 115.000'
          },
          {
            id: '10',
            image: 'img_books/sosial_media_success_for_every_brand.jpg',
            title: "Social Media Success For Every Brand",
            price: 'Rp 70.000'
          },
          {
            id: '11',
            image: 'img_books/jadi_youtuber_a_z_update_version.jpg',
            title: "Jadi Youtuber A-Z (Update Version)",
            price: 'Rp 88.000'
          },
          {
            id: '12',
            image: '/img_books/panduan_komplet_menulis_kreatif.jpg',
            title: "Panduan Komplet Menulis Kreatif",
            price: 'Rp 75.500'
          },
          {
            id: '13',
            image: '/img_books/kreator_konten.jpg',
            title: "Why? Content Creator - Kreator Konten",
            price: 'Rp 119.000'
          },
          {
            id: '14',
            image: '/img_books/instagram_marketing_untuk_pemula.jpg',
            title: "Instagram Marketing untuk Pemula",
            price: 'Rp 60.000'
          },
          {
            id: '15',
            image: '/img_books/hidup_ini_singkat_jangan_dibuat_berat.jpg',
            title: "Hidup Ini Singkat, Jangan Dibuat Berat",
            price: 'Rp 79.000'
          },
          {
            id: '16',
            image: '/img_books/misteri_bilik_korek_api.jpg',
            title: "Misteri Bilik Korek Api",
            price: 'Rp 79.000'
          },
          {
            id: '17',
            image: '/img_books/ayah_ini_arahnya_kemana_ya.jpg',
            title: "Ayah, Ini Arahnya ke Mana, ya?",
            price: 'Rp 79.000'
          },
          {
            id: '18',
            image: '/img_books/panduan_mengelola_optimisme_dan_pesimisme_dengan_bijak.jpg',
            title: "Panduan Mengelola Optimisme dan Pesimisme dengan Bijak",
            price: 'Rp 50.000'
          },
          {
            id: '19',
            image: '/img_books/seni_menerima_diri_sendiri.jpg',
            title: "Seni Menerima Diri Sendiri",
            price: 'Rp 49.500'
          },
          {
            id: '20',
            image: '/img_books/untuk_kamu_yang_lelah_dan_hampir_menyerah.jpg',
            title: "Untuk Kamu yang Lelah dan Hampir Menyerah",
            price: 'Rp 59.000'
          },
        ],
      };
    },

    computed: {
      filteredBooks() {
        return this.books.filter((book) =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
</script>

<style>
</style>