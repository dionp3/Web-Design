<template>
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
</template>

  
<script>
  import Book from "../components/Book.vue"
  export default {
    name: 'BooksView',

    components: {
      Book
    },

    data(){
      //API
      //Untuk sementara pake data dummy
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
            image: 'https://example.com/to-kill-a-mockingbird.jpg',
            title: 'To Kill a Mockingbird',
            price: 'Rp 156.000'
          },
          {
            id: '4',
            image: 'https://example.com/thinking-fast-and-slow.jpg',
            title: 'Thinking, Fast and Slow',
            price: 'Rp 148.000'
          },
          {
            id: '5',
            image: 'https://example.com/rich-dad-poor-dad.jpg',
            title: 'Rich Dad Poor Dad',
            price: 'Rp 173.938'
          },
          {
            id: '6',
            image: 'https://example.com/the-catcher-in-the-rye.jpg',
            title: 'The Catcher in the Rye',
            price: 'Rp 127.640'
          },
          {
            id: '7',
            image: 'https://example.com/the-silent-patient.jpg',
            title: 'The Silent Patient',
            price: 'Rp 79.200'
          },
          {
            id: '8',
            image: 'https://example.com/mans-search-for-meaning.jpg',
            title: "Man's Search for Meaning",
            price: 'Rp 67.150'
          },
        ]
      }
    },
  };
</script>

<style>
</style>