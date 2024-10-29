<template>
  <div class="container mx-auto py-8 px-4 lg:px-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Kategori Fiksi -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Fiksi</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Fantasi</li>
          <li>Fiksi Ilmiah (Sci-Fi)</li>
          <li>Distopia</li>
          <li>Misteri</li>
          <li>Thriller</li>
          <li>Horror</li>
          <li>Romansa</li>
          <li>Drama</li>
          <li>Petualangan</li>
          <li>Fiksi Sejarah</li>
          <li>Fiksi Inspiratif</li>
          <li>Cerita Pendek</li>
        </ul>
      </div>

      <!-- Kategori Non-Fiksi -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Non-Fiksi</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Biografi dan Memoir</li>
          <li>Otobiografi</li>
          <li>Esai dan Kritik</li>
          <li>Sejarah</li>
          <li>Sains dan Teknologi</li>
          <li>Filsafat</li>
          <li>Psikologi</li>
          <li>Pendidikan</li>
          <li>Politik dan Pemerintahan</li>
          <li>Hukum</li>
          <li>Kesehatan dan Kebugaran</li>
          <li>Ekonomi dan Bisnis</li>
          <li>Agama dan Spiritualitas</li>
        </ul>
      </div>

      <!-- Kategori Komik dan Novel Grafis -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Komik dan Novel Grafis</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Komik Superhero</li>
          <li>Komik Slice of Life</li>
          <li>Novel Grafis Fantasi</li>
          <li>Manga</li>
          <li>Manhwa</li>
          <li>Webtoon</li>
        </ul>
      </div>

      <!-- Kategori Buku Anak-anak -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Buku Anak-anak</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Buku Bergambar</li>
          <li>Fabel</li>
          <li>Dongeng</li>
          <li>Fiksi Anak-anak</li>
          <li>Buku Aktivitas</li>
        </ul>
      </div>

      <!-- Kategori Remaja (Young Adult) -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Remaja (Young Adult)</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Fiksi Remaja</li>
          <li>Fiksi Fantasi Remaja</li>
          <li>Drama Remaja</li>
          <li>Fiksi Ilmiah Remaja</li>
          <li>Distopia Remaja</li>
          <li>Cerita Horor Remaja</li>
        </ul>
      </div>

      <!-- Kategori Antologi -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Antologi</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Antologi Puisi</li>
          <li>Antologi Cerpen</li>
          <li>Antologi Esai</li>
          <li>Antologi Cerita Horor</li>
        </ul>
      </div>

      <!-- Kategori Buku Seni dan Desain -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Buku Seni dan Desain</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Fotografi</li>
          <li>Seni Rupa</li>
          <li>Desain Grafis</li>
          <li>Arsitektur</li>
          <li>Desain Produk</li>
          <li>Ilustrasi</li>
        </ul>
      </div>

      <!-- Kategori Buku Edukasi -->
      <div>
        <h2 class="text-lg font-semibold mb-4 text-orange-600">Buku Edukasi</h2>
        <ul class="space-y-2 text-gray-700">
          <li>Buku Pelajaran Sekolah</li>
          <li>Buku Ajar Akademik</li>
          <li>Buku Panduan Ujian</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesView",
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
