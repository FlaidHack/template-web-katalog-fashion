// ============================================================
//  MONO FASHION — semua isi halaman ada di file ini.
//  Ubah teks, harga, nomor WhatsApp, dan foto di sini, lalu jalankan `npm run build`.
//  Semua nama produk, harga, alamat, dan kebijakan di bawah adalah CONTOH.
// ============================================================

export const site = {
  name: 'Mono Fashion',
  short: 'mono',
  sub: 'fashion',
  title: 'Mono Fashion — harian, tapi jangan biasa',
  description:
    'Atasan, bawahan, outer, dan aksesori dari Mono Fashion. Potongan rapi, bahan nyaman, dibuat terbatas. Pilih ukuran, lalu pesan lewat WhatsApp.',
  // Nomor WhatsApp pakai kode negara tanpa tanda + dan tanpa 0 di depan (62 untuk Indonesia).
  whatsapp: '6281234567890',
  instagram: '@monofashion.id',
  address: 'Jl. Contoh No. 12, Kota Anda',
  hours: 'Senin sampai Sabtu, 10.00–18.00',
};

export const hero = {
  eyebrow: 'Drop 02 — Edisi Kota',
  headline: ['Harian,', 'tapi jangan biasa.'],
  text: 'Atasan, bawahan, outer, sampai tas. Potongan yang gampang dipadukan, bahan yang nyaman dipakai dari pagi sampai malam.',
  cta: 'Lihat koleksi',
  secondary: 'Tanya stok dulu',
  // Tiga kartu pilihan yang berputar di bagian atas. Foto idealnya potret 4:5.
  cards: [
    {
      label: 'Pilihan 01',
      name: 'Kemeja Garis + Celana Bahan Hitam',
      image: '/images/hero1.jpg',
      alt: 'Kemeja garis hitam putih dipasangkan dengan celana bahan hitam',
    },
    {
      label: 'Pilihan 02',
      name: 'Polo Rajut Krah Kotak',
      image: '/images/hero2.jpg',
      alt: 'Atasan polo rajut hitam lengan panjang dengan krah kotak-kotak',
    },
    {
      label: 'Pilihan 03',
      name: 'Trench Coat Kancing Ganda',
      image: '/images/hero3.jpg',
      alt: 'Trench coat hitam model kancing dua baris',
    },
  ],
};

export const favorit = {
  eyebrow: 'Pilihan editor',
  heading: 'Favorit minggu ini.',
  text: 'Enam potongan yang paling laris dari drop ini. Susunan di bawah dibaca dari kiri, bergantian ke kanan bawah, seperti membuka majalah.',
};

export const catalog = {
  eyebrow: 'Katalog lengkap',
  heading: 'Semua koleksi.',
  text: 'Semua potongan Mono Fashion — favorit sampai yang mulai menipis stoknya.',
};

// FOTO PRODUK: tiap produk punya satu foto di public/images/.
// Cara paling mudah: timpa file dengan nama yang sama (produk-1.jpg, produk-2.jpg, dst.).
// Foto boleh rasio apa saja, tapi hasilnya dipotong mengikuti ukuran kotak di stylesheet.
export const products = [
  {
    name: 'Sweater Rajut Rib “Zaitun”',
    category: 'Atasan',
    detail: 'Rajut rib hijau zaitun, kerah bulat kontras krem, lengan panjang',
    price: 259000,
    image: '/images/produk-1.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: ['XL'],
  },
  {
    name: 'Jaket Chore Wol “Lapang”',
    category: 'Outer',
    detail: 'Wol cokelat tua, kancing depan, dua saku dada, potongan boxy',
    price: 399000,
    image: '/images/produk-2.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
  },
  {
    name: 'Rugby Sweatshirt “Hijau”',
    category: 'Atasan',
    detail: 'Fleece olahraga hijau zaitun, kerah krah kontras krem, listing jahitan',
    price: 229000,
    image: '/images/produk-3.jpg',
    sizes: ['S', 'M', 'L'],
    soldOut: ['S'],
  },
  {
    name: 'Polo Rajut Rib “Navy”',
    category: 'Atasan',
    detail: 'Rajut rib navy lengan pendek, kerah dan manset kontras krem',
    price: 269000,
    image: '/images/produk-4.jpg',
    sizes: ['M', 'L', 'XL'],
    soldOut: [],
  },
  {
    name: 'Jaket Wool “Pasir”',
    category: 'Outer',
    detail: 'Wol beige, kancing depan, saku boxy, cocok dilapiskan',
    price: 379000,
    image: '/images/produk-5.jpg',
    sizes: ['S', 'M', 'L'],
    soldOut: [],
  },
  {
    name: 'Kemeja Linen “Cokelat”',
    category: 'Atasan',
    detail: 'Linen cokelat tua, kerah lipat, saku dada, layar kaos',
    price: 289000,
    image: '/images/produk-6.jpg',
    sizes: ['Satu ukuran'],
    soldOut: [],
  },
  {
    name: 'Kemeja “Sahara”',
    category: 'Atasan',
    detail: 'Kemeja lengan panjang krem, manset kontras cokelat, bahan spin-dyed',
    price: 299000,
    image: '/images/produk-7.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: [],
  },
  {
    name: 'Jaket Bulu Sherpa “Basalt”',
    category: 'Outer',
    detail: 'Suede zaitun, kerah sherpa, dua saku zipper',
    price: 549000,
    image: '/images/produk-8.jpg',
    sizes: ['M', 'L', 'XL'],
    soldOut: [],
  },
  {
    name: 'Sweater Zip Polo “Marmora”',
    category: 'Atasan',
    detail: 'Rajut rib burgundy, zipper setengah, potongan boxy',
    price: 289000,
    image: '/images/produk-9.jpg',
    sizes: ['S', 'M', 'L'],
    soldOut: [],
  },
  {
    name: 'Set Kemeja + Celana “Terasa”',
    category: 'Outer',
    detail: 'Kemeja cokelat senada, kerah lipat, manset digulung, saku dada',
    price: 459000,
    image: '/images/produk-10.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOut: ['XL'],
  },
  {
    name: 'Rugby Sweatshirt “Klub”',
    category: 'Atasan',
    detail: 'Sweatshirt krem bordir klasik, kerah rugby maroon, manset rib',
    price: 259000,
    image: '/images/produk-11.jpg',
    sizes: ['S', 'M'],
    soldOut: [],
  },
  {
    name: 'Sweater Shadow “Vapor”',
    category: 'Atasan',
    detail: 'Rajut rib ombre cokelat-krem, kerah zipper tinggi',
    price: 329000,
    image: '/images/produk-12.jpg',
    sizes: ['S', 'M', 'L'],
    soldOut: [],
  },
  {
    name: 'Jaket Denim “Houndstooth”',
    category: 'Outer',
    detail: 'Motif houndstooth cokelat-pudra, saku boxy, tombol metal',
    price: 449000,
    image: '/images/produk-13.jpg',
    sizes: ['M', 'L', 'XL'],
    soldOut: [],
  },
  {
    name: 'Sweater Half Zip “Sahlen”',
    category: 'Atasan',
    detail: 'Rajut blok warna navy-krem-cokelat, zipper setengah, rib manset',
    price: 339000,
    image: '/images/produk-14.jpg',
    sizes: ['M', 'L'],
    soldOut: [],
  },
];

export const about = {
  heading: 'Koleksi kecil, dipakai terus.',
  statement:
    'Kami bikin sedikit potongan tiap bulan, bukan puluhan. Supaya tiap baju benar-benar kepakai, gampang dipadukan, dan nggak cuma ikut tren seminggu.',
  // FOTO: public/images/tentang.jpg (potret 4:5 atau lanskap, minimal 1000 px)
  image: '/images/tentang.jpg',
  alt: 'Foto contoh untuk bagian tentang',
  facts: [
    {
      title: 'Bahan',
      text: 'Katun combed, linen campur katun, dan rajut ringan. Dipilih yang adem dan tidak menerawang.',
    },
    {
      title: 'Jahitan',
      text: 'Dijahit penjahit lokal dalam jumlah kecil. Tepi dikunci rapi supaya awet dicuci.',
    },
    {
      title: 'Produksi',
      text: 'Sekitar 60 potong per model. Kalau habis, kami buat batch baru dengan detail berbeda.',
    },
  ],
};

export const sizing = {
  heading: 'Tabel ukuran',
  note: 'Ukuran diukur datar dalam sentimeter, toleransi 1 sampai 2 cm. Untuk bawahan, cocokkan lingkar pinggang dengan celana yang sudah kamu punya. Bingung memilih? Kirim tinggi dan berat badanmu lewat WhatsApp.',
  head: ['Ukuran', 'Lebar dada', 'Lingkar pinggang', 'Panjang'],
  rows: [
    ['S', '50', '72', '66'],
    ['M', '53', '76', '68'],
    ['L', '56', '80', '70'],
    ['XL', '59', '84', '72'],
  ],
};

export const faq = {
  heading: 'Tanya jawab',
  items: [
    {
      q: 'Bagaimana cara memesan?',
      a: 'Pilih produk dan ukuran di bagian koleksi, lalu tekan tombol pesan. WhatsApp terbuka dengan pesan yang sudah terisi, tinggal kamu kirim.',
    },
    {
      q: 'Bagaimana cara membayar?',
      a: 'Lewat transfer bank atau e-wallet. Rincian pembayaran dikirim lewat WhatsApp setelah pesananmu kami konfirmasi.',
    },
    {
      q: 'Berapa lama sampai di rumah?',
      a: 'Pesanan dikemas dalam 1 sampai 2 hari kerja. Lama pengiriman bergantung pada ekspedisi dan kotamu.',
    },
    {
      q: 'Bisa tukar ukuran?',
      a: 'Bisa, selama baju belum dipakai, label masih terpasang, dan kamu mengabari kami maksimal 3 hari setelah barang tiba.',
    },
  ],
};

export const contact = {
  heading: 'Mau tanya dulu? Boleh.',
  text: 'Balasan biasanya datang di jam buka. Tanya stok, ukuran, atau ongkos kirim kapan saja.',
  cta: 'Chat lewat WhatsApp',
};

// ---- fungsi bantu (tidak perlu diubah) ----
export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');
export const wa = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
