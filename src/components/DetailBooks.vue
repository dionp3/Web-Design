<template>
  <div class="w-full md:w-3/4 mx-auto p-6 flex flex-col md:flex-row items-center gap-6 justify-center min-h-screen">
    <!-- Gambar Buku -->
    <div class="w-full md:w-1/3 mb-6 md:mb-0">
      <img :src="book.image" :alt="book.title" class="object-contain rounded-lg shadow-lg w-4/5 mx-auto h-auto" />
    </div>

    <!-- Detail Buku -->
    <div class="flex flex-col w-full max-w-md">
      <!-- Title and Price -->
      <h1 class="text-xl font-semibold text-gray-900">{{ book.title }}</h1>
      <p class="text-lg text-gray-600 mt-1">{{ book.price }}</p>

      <!-- Buttons -->
      <div class="mt-4 flex space-x-7 justify-start">
        <button 
          @click="showAlert('Buyed')" 
          class="bg-[#FDB750] text-black px-20 py-2 rounded-lg shadow-md hover:bg-[#e5a741] transition-colors"
        >
          Buy
        </button>
        <button 
          @click="showAlert('Thank you')" 
          class="bg-[#FDB750] text-black px-20 py-2 rounded-lg shadow-md hover:bg-[#e5a741] transition-colors"
        >
          Give Tips
        </button>
      </div>

      <!-- Description -->
      <div class="mt-6">
        <h2 class="text-lg font-semibold text-gray-900">Deskripsi</h2>
        <p class="text-gray-600 mt-2 text-justify">
          {{ book.description || "Deskripsi buku belum tersedia." }}
        </p>
      </div>

      <!-- Creator -->
      <div class="mt-6">
        <h2 class="text-lg font-semibold text-gray-900">Kreator</h2>
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

  methods: {
    showAlert(message) {
      alert(message); // Menampilkan alert dengan pesan yang diterima
    },
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
      {
        id: "9",
        image: "/img_books/crushing_it.jpg",
        title: "Crushing IT",
        price: "Rp 115.00",
        description:"Anda akan membaca cerita tentang orang-orang yang takut, seperti Anda. Mereka yang memiliki kewajiban, seperti Anda. Mereka yang diberitahu bahwa mereka bersikap bodoh, sembrono, tidak bertanggung jawab, dan kekanak-kanakan. Mereka toh tetap melakukannya dan menuai hasilnya. Jika ada satu hal yang bisa diajarkan buku ini, yaitu fakta bahwa satu-satunya hal yang menghentikan Anda untuk memiliki karir yang cemerlang dan kehidupan yang bahagia adalah diri Anda sendiri.", 
        creator: "Gary Vaynerchuck",
      },
      {
        id: "10",
        image: "/img_books/sosial_media_success_for_every_brand.jpg",
        title: "Social Media Success For Every Brand",
        price: "Rp 70.000",
        description: "Jika Anda menantikan panduan utama untuk menavigasi media sosial, inilah dia! Claire Diaz-Ortiz, rekan penulis saya di One Minute Mentoring dan salah satu dari seri Fast Company yang berjudul “Top Ten Social Media Mavens”, meringkas pengetahuan akan media sosial selama beberapa dasawarsa ke dalam bagian-bagian yang mudah dimengerti oleh kalangan komunikator digital yang ingin mengembangkan brand mereka",
        creator: "CLAIRE DIAZ-ORTIZ",
      },
      {
        id: "11",
        image: "/img_books/jadi_youtuber_a_z_update_version.jpg",
        title: "Jadi Youtuber A-Z (Update Version)",
        price: "Rp 88.000",
        description: "Buku ini membahas serba-serbi menjadi seorang Youtuber dari A hingga Z. Dengan membaca buku ini, Anda akan terinspirasi untuk mengembangan saluran kanal Youtube milik Anda sendiri. Atau barangkali, buku ini juga akan bermanfaat bagi para social media specialist yang disewa perusahaan atau klien secara profesional.",
        creator: "Jubilee Enterprise",
      },
      {
        id: "12",
        image: "/img_books/panduan_komplet_menulis_kreatif.jpg",
        title: "Panduan Komplet Menulis Kreatif",
        price: "Rp 75.500",
        description: "Buku ini berisi teori dan motivasi, jenis tulisan, dan petunjuk praktis menulis, disertai dengan contoh-contoh tulisan. Pembaca diharapkan mempunyai teori dan motivasi yang kuat. Kemudian dengan jenis tulisan dan petunjuk praktis menulis, diharapkan para pembaca mau dan berani menulis dan menghasilkan karya yang berbobot dan bermanfaat bagi orang lain.",
        creator: "Ipnu Rinto Nugroho",
      },
      {
        id: "13",
        image: "/img_books/kreator_konten.jpg",
        title: "Why? Content Creator - Kreator Konten",
        price: "Rp 119.000",
        description: "Demi menjadi kreator konten yang bisa menyajikan konten-konten berkualitas, mereka pun berusaha untuk belajar dari A sampai Z agar dapat menjadi content creator yang berintegritas dengan konten yang disajikan. Kamu juga ingin jadi YouTuber?. Ayo, cari tahu apa saja tips untuk jadi kreator konten bersama Omji dan Komji!.",
        creator: "Elex Media Komputindo",
      },
      {
        id: "14",
        image: "/img_books/instagram_marketing_untuk_pemula.jpg",
        title: "Instagram Marketing untuk Pemula",
        price: "Rp 60.000",
        description: "buku ini adalah panduan lengkap belajar Instagram marketing untuk pemula. Buku ini memandu Anda untuk belajar Instagram marketing mulai dari nol. Tunggu apalagi, bisnis Anda perlu hadir di Instagram. Apalagi jika target pasar Anda adalah para milenial, maka Instagram wajib menjadi salah satu media promosi andalan Anda. Anda bisa berpromosi dengan mudah, murah, praktis, bahkan gratis.",
        creator: "Jefferly Helianthusonfri",
      },
      {
        id: "15",
        image: "/img_books/hidup_ini_singkat_jangan_dibuat_berat.jpg",
        title: "Hidup Ini Singkat, Jangan Dibuat Berat",
        price: "Rp 79.000",
        description: "Dalam buku ini, Anda akan mempelajari prinsip-prinsip yang ditetapkan Dale Carnegie, yang dikembangkan para penerusnya, dan yang diterapkan oleh jutaan orang. Anda juga akan belajar cara memprogram pendekatan untuk menghadapi berbagai situasi dalam hidup ini. Anda akan belajar cara mendiagnosis kekuatan dan kelemahan Anda serta cara meningkatkan kekuatan sekaligus mengatasi kelemahan.",
        creator: "Dale Carnegie",
      },
      {
        id: "16",
        image: "/img_books/misteri_bilik_korek_api.jpg",
        title: "Misteri Bilik Korek Api",
        price: "Rp 79.000",
        description: "Buku ini dalam proses adaptasi untuk menjadi sebuah film. Merupakan penulis dari buku bestseller Rumah Lebah. Narasinya diperkaya dengan dialek Ambon yang memberi kesan autentik dan menambah pengalaman pembaca dengan bahasa yang hidup dan jarang digunakan dalam novel umum.",
        creator: "Ruwi Meitasari",
      },
      {
        id: "17",
        image: "/img_books/ayah_ini_arahnya_kemana_ya.jpg",
        title: "Ayah, Ini Arahnya ke Mana, ya?",
        price: "Rp 79.000",
        description: "Ayah, Ini Arahnya ke Mana, ya? adalah buku yang mengangkat isu fatherless dan kehilangan. Buku ini hadir untuk kalian peluk dengan rasa rindu kepada seseorang yang sudah pergi. Mengisahkan seorang anak yang kehilangan sosok Ayah dan tidak tahu arah hidupnya akan ke mana.",
        creator: "Khoirul Trian",
      },
      {
        id: "18",
        image: "/img_books/panduan_mengelola_optimisme_dan_pesimisme_dengan_bijak.jpg",
        title: "Panduan Mengelola Optimisme dan Pesimisme dengan Bijak",
        price: "Rp 50.000",
        description: "Buku ini menawarkan kepada pembaca mengenai cara-cara mengelola optimisme dan pesimisme. Bagaimana cara menyadari kehadiran kita di dunia ini, menyikapi harapan-harapan yang tidak terwujud, mengetahui-mengetahui sumber-sumber yang sering membuat kita kecewa, dan lainnya. Tujuannya, supaya sisi kemanusian kita tetap terjaga.",
        creator: "Kaha Anwar",
      },
      {
        id: "19",
        image: "/img_books/seni_menerima_diri_sendiri.jpg",
        title: "Seni Menerima Diri Sendiri",
        price: "Rp 49.500",
        description: "Manusia tidak luput dari rasa puas terhadap diri sendiri, orang lain, atau lingkungan sekitar. Ada orang yang mampu berdamai dengan diri sendiri, baik sekarang maupun tidak sama sekali, tergantung pada diri mereka masing-masing. Sebagian orang menganggap berdamai dengan diri sendiri sebagai tanda kelemahan, seakan-akan kita menjadi manusia yang tidak mampu menghadapi tantangan hidup.",
        creator: "Ipnu R. Nugroho",
      },
      {
        id: "20",
        image: "/img_books/untuk_kamu_yang_lelah_dan_hampir_menyerah.jpg",
        title: "Untuk Kamu yang Lelah dan Hampir Menyerah",
        price: "Rp 59.000",
        description: "Kamu boleh lelah, kamu boleh merasa ingin menyerah, tapi ingatlah, bahkan dalam kegelapan, harapan tetap bersinar. Buku ini adalah pelukan hangat di saat tidak ada seorang pun di sekitarmu, sebuah pengingat bahwa harapan selalu ada di depan sana, menunggumu untuk mengambil satu langkah lagi.",
        creator: "Nora",
      },
    ];

    this.book = books.find((book) => book.id === this.id) || {};
  },
};
</script>

<style scoped>

</style>
