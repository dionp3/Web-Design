<template>
    <div class="bg-gray-100 min-h-screen p-10">
      <!-- Container utama -->
      <div class="bg-white max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <!-- Header -->
        <header class="bg-orange-500 p-4 flex items-center justify-between">
          <h1 class="text-white text-2xl font-bold">KREASI KITA</h1>
          <div class="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              class="w-full p-2 rounded-full border border-gray-300 focus:outline-none"
            />
          </div>
          <nav class="text-white font-semibold space-x-6">
            <a href="#" class="hover:text-gray-200">Books</a>
            <a href="#" class="hover:text-gray-200">Categories</a>
            <a href="#" class="hover:text-gray-200">About Us</a>
          </nav>
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
        </header>
  
        <!-- Konten -->
        <div class="flex">
          <!-- Gambar Buku -->
          <div class="w-1/2 p-10 bg-orange-100 flex justify-center items-center">
            <img
              src="https://dummyimage.com/300x400/000/fff&text=Atomic+Habits"
              alt="Cover Buku"
              class="rounded-lg shadow-lg max-h-80"
            />
          </div>
  
          <!-- Detail Buku -->
          <div class="w-1/2 p-8">
            <!-- Judul Buku -->
            <h2 class="text-3xl font-bold mb-2">Judul Buku</h2>
            <p class="text-xl text-gray-700 mb-4">Rp 1.000.000</p>
  
            <!-- Tombol Aksi -->
            <div class="space-x-2 mb-6">
              <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                BUY
              </button>
              <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                + CART
              </button>
              <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                GIVE TIPS
              </button>
            </div>
  
            <!-- Deskripsi Buku -->
            <h3 class="text-xl font-semibold mb-2">Deskripsi</h3>
            <p class="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula lectus. Vivamus accumsan maximus nunc et aliquet.
            </p>
  
            <!-- Nama Kreator -->
            <h3 class="text-xl font-semibold mb-2">Kreator</h3>
            <p class="text-gray-600">Nama Kreator</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DetailBuku",
    props: {
      // Props dapat digunakan jika Anda ingin membuat komponen ini dinamis
      judul: {
        type: String,
        default: "Judul Buku"
      },
      harga: {
        type: Number,
        default: 1000000
      },
      deskripsi: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      kreator: {
        type: String,
        default: "Nama Kreator"
      },
      cover: {
        type: String,
        default: "https://dummyimage.com/300x400/000/fff&text=Atomic+Habits"
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tidak ada styling tambahan di sini, semua menggunakan Tailwind */
  </style>
  