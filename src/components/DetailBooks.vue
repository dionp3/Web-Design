<template>
  <div class="container mx-auto p-6 flex flex-col md:flex-row items-center gap-4 justify-center min-h-screen">
    <!-- Gambar Buku -->
    <div>
      <img :src="book.image" :alt="book.title" class="h-85 object-contain rounded-md shadow-md mb-4" />
    </div>

    <!-- Detail Buku -->
    <div class="flex flex-col md:flex-1">
      <h1 class="text-3xl font-bold text-gray-900">{{ book.title }}</h1>
      <p class="text-xl text-gray-600 mt-2">{{ book.price }}</p>

      <div class="mt-4 flex gap-4">
        <button class="bg-yellow-500 text-white px-6 py-2 rounded-md shadow-md">Buy</button>
        <button class="bg-gray-300 text-black px-6 py-2 rounded-md shadow-md">+ Cart</button>
        <button class="bg-orange-600 text-white px-6 py-2 rounded-md shadow-md">Give Tips</button>
      </div>

      <div class="mt-6">
        <h2 class="text-lg font-bold text-gray-900">Deskripsi</h2>
        <p class="text-gray-600 mt-2 text-justify">
          {{ book.description || "Deskripsi buku belum tersedia." }}
        </p>
      </div>

      <div class="mt-6">
        <h2 class="text-lg font-bold text-gray-900">Kreator</h2>
        <p class="text-gray-600">{{ book.creator || "Nama kreator tidak diketahui." }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBooks",

  props: ["id"], 
  
  data() {
    return {
      book: {}, 
    };
  },

  mounted() {
    const books = [
      {
        id: "1",
        image: "/img_books/romeo_and_juliet.jpg",
        title: "Romeo & Juliet",
        price: "Rp 100.000",
        description: "Romeo dan Juliet adalah drama tragedi yang mengisahkan cinta terlarang antara dua remaja dari keluarga yang bermusuhan, Montague dan Capulet. Kisah ini mengeksplorasi tema cinta, takdir, dan konflik keluarga.",
        creator: "William Shakespeare",
      },
      {
        id: "2",
        image: "/img_books/atomic_habits.jpg",
        title: "Atomic Habits",
        price: "Rp 98.500",
        description: "Buku ini membahas bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat menghasilkan hasil yang luar biasa. James Clear menawarkan strategi praktis untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk, dengan pendekatan berbasis sains dan contoh nyata",
        creator: "James Clear",
      },
      {
        id: "3",
        image: "/img_books/to_kill_a_mockingbird.jpg",
        title: "To Kill a Mockingbird",
        price: "Rp 156.000",
        description: "Novel ini berlatar di Alabama pada era 1930-an dan menceritakan kisah Scout Finch, seorang gadis muda, yang menyaksikan ayahnya, Atticus Finch, seorang pengacara, membela seorang pria kulit hitam yang dituduh memperkosa wanita kulit putih. Buku ini mengeksplorasi isu rasial, keadilan, dan moralitas.",
        creator: "Harper Lee",
      },
      {
        id: "4",
        image: "/img_books/thinking_fast_and_slow.jpg",
        title: "Thinking, Fast and Slow",
        price: "Rp 148.000",
        description: "Dalam buku ini, Daniel Kahneman, seorang psikolog dan peraih Nobel Ekonomi, menjelaskan dua sistem berpikir manusia: Sistem 1 yang cepat dan intuitif, serta Sistem 2 yang lambat dan logis. Buku ini mengungkap bagaimana kedua sistem ini mempengaruhi pengambilan keputusan dan penilaian kita sehari-hari.",
        creator: "Daniel Kahneman",
      },
      {
        id: "5",
        image: "/img_books/rich_dad_poor_dad.jpg",
        title: "Rich Dad Poor Dad",
        price: "Rp 173.938",
        description: "Buku ini menceritakan pengalaman penulis dengan dua figur ayah: ayah kandungnya (Poor Dad) dan ayah sahabatnya (Rich Dad). Melalui perbandingan pandangan kedua ayah tersebut tentang uang dan investasi, Kiyosaki memberikan wawasan tentang literasi keuangan dan cara mencapai kebebasan finansial.",
        creator: "Robert T. Kiyosaki",
      },
      {
        id: "6",
        image: "/img_books/the_catcher_in_the_rye.jpg",
        title: "The Catcher in the Rye",
        price: "Rp 127.640",
        description: "Novel ini mengikuti perjalanan Holden Caulfield, seorang remaja yang mengalami krisis identitas dan pemberontakan terhadap norma masyarakat. Melalui narasi Holden, buku ini mengeksplorasi tema alienasi, pencarian jati diri, dan kritik terhadap kemunafikan sosial.",
        creator: "J.D. Salinger",
      },
      {
        id: "7",
        image: "/img_books/the_silent_patient.jpg",
        title: "The Silent Patient",
        price: "Rp 79.200",
        description: "Thriller psikologis ini berkisah tentang Alicia Berenson, seorang pelukis terkenal yang tiba-tiba membunuh suaminya dan memilih untuk tidak berbicara lagi. Psikoterapis Theo Faber tertarik untuk mengungkap alasan di balik keheningan Alicia dan kebenaran di balik peristiwa tersebut.",
        creator: "Alex Michaelides",
      },
      {
        id: "8",
        image: "/img_books/mans_search_for_meaning.jpg",
        title: "Man's Search for Meaning",
        price: "Rp 67.150",
        description: "Buku ini adalah memoar Viktor Frankl tentang pengalamannya sebagai tahanan di kamp konsentrasi Nazi. Frankl, seorang psikiater, mengembangkan logoterapi, sebuah pendekatan yang menekankan pentingnya menemukan makna hidup bahkan dalam situasi paling sulit.",
        creator: "Viktor E. Frankl",
      },
    ];

    this.book = books.find((book) => book.id === this.id) || {};
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  padding-left: 300px;
  padding-right: 300px;
}
</style>
