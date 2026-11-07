# kelabu — template landing page monokrom (fashion lokal)

Template demo untuk menawarkan jasa landing page ke UMKM. Dibuat dengan Astro, tanpa Tailwind, hampir tanpa JavaScript.
Semua nama, harga, alamat, dan kebijakan di dalamnya adalah **contoh**. Ganti sebelum dipakai klien.

## Menjalankan

Butuh Node.js 22 atau lebih baru.

```bash
npm install
npm run dev       # lihat di http://localhost:4321 sambil mengedit
npm run build     # hasil jadi ada di folder dist/
npm run preview   # coba hasil build
```

Folder `dist/` sudah ikut di zip ini, jadi bisa langsung diunggah ke Netlify, Cloudflare Pages, atau hosting statis lain tanpa build ulang.
Kalau kamu mengubah foto atau teks, jalankan `npm run build` lagi lalu unggah ulang `dist/`.

## Mengganti foto (foto dummy → foto produk asli)

Semua foto ada di satu tempat: **`public/images/`**.
Saat ini semuanya foto dummy (satu foto yang dipotong beda-beda). Cara paling mudah: **timpa file dengan nama yang sama**.

| File di `public/images/` | Dipakai untuk | Bentuk kotak di halaman | Ukuran foto yang disarankan |
| --- | --- | --- | --- |
| `hero.jpg` | foto besar bagian atas | lanskap 16:10 | 1600 × 1000 px |
| `produk-1.jpg` | Kaos Harian | potret 4:5 | 960 × 1200 px |
| `produk-2.jpg` | Kemeja Pagi | persegi 1:1 | 1000 × 1000 px |
| `produk-3.jpg` | Kulot Lurus | lanskap 8:5 | 1600 × 1000 px |
| `produk-4.jpg` | Jaket Tipis | potret 4:5 | 960 × 1200 px |
| `produk-5.jpg` | Rok Lipit | persegi 1:1 | 1000 × 1000 px |
| `produk-6.jpg` | Tas Kanvas | lanskap 8:5 | 1600 × 1000 px |
| `tentang.jpg` | foto di bagian "Kenapa satu warna" | potret 4:5 | 960 × 1200 px |

Catatan:
- Foto boleh rasio berapa saja. Browser memotongnya otomatis (bagian tengah yang terlihat), jadi taruh produk di tengah bingkai.
- Pakai format `.jpg` dan usahakan di bawah 300 KB per foto (kompres di squoosh.app) supaya halaman cepat dibuka.
- Mau pakai nama file lain atau format lain (`.webp`, `.png`)? Taruh file di `public/images/`, lalu ubah alamatnya di `src/data/site.js` (kolom `image`).
- Mau menambah atau mengurangi produk? Tambah atau hapus satu blok di daftar `products` di `src/data/site.js`. Tata letak "dinding foto" disiapkan untuk 6 produk; kalau jumlahnya beda, sesuaikan kelas `.c1`–`.c6` di `src/styles/main.css`.

## Mengganti isi

Semua teks ada di **`src/data/site.js`**: nama toko, nomor WhatsApp, produk, harga, ukuran yang tersedia (`sizes`), ukuran yang habis (`soldOut`), tabel ukuran, tanya jawab, alamat, jam buka.

- **Nomor WhatsApp**: ubah `whatsapp` di `site.js`. Tulis dengan kode negara, tanpa `+` dan tanpa 0 di depan (contoh `6281234567890`).
- **Warna**: ada di bagian `:root` paling atas `src/styles/main.css`. Template ini sengaja hanya hitam-putih-abu; warna di halaman datang dari foto produk.
- **Font**: Jost (sudah ikut terpasang, tidak memanggil Google Fonts).

## Cara kerja tombol pesan

Tiap produk punya pilihan ukuran. Saat pembeli memilih ukuran, tombol berubah jadi "Pesan ukuran M" dan membuka WhatsApp dengan pesan yang sudah terisi (nama produk + ukuran). Ukuran yang habis tidak bisa dipilih. Tanpa JavaScript, tombol tetap berfungsi sebagai "Tanya stok lewat WhatsApp".

## Yang perlu kamu ganti sebelum dipakai klien

- Semua nama produk, harga, bahan, tabel ukuran
- Kebijakan di Tanya jawab (pembayaran, pengiriman, tukar ukuran)
- Alamat, jam buka, akun Instagram, nomor WhatsApp
- Semua foto (lihat tabel di atas)
