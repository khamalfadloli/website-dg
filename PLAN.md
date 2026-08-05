# RENCANA FINAL — Dapoer Girli v2 (Tampilan, Fitur, SEO, Domain)

> Status: DISETUJUI 2026-08-04. Eksekusi dimulai setelah ini.

## Fase A — Poles Tampilan (agar profesional)
| # | Pekerjaan | Detail |
|---|---|---|
| A1 | Konsistensi warna | Navbar: buang hex `#920000` -> token `--color-primary` (#785900) sesuai tema Material |
| A2 | Hero | Badge "Buka 06.00-14.00 WIB", statistik singkat (12+ menu, sejak 2019), CTA "Lihat Menu" + "Order WA" |
| A3 | Kartu menu | Label kategori kecil, harga rapi, hover konsisten di homepage & /menu |
| A4 | Footer | Link GoFood/GrabFood/ShopeeFood (dari `href="#"`) -> URL order asli |
| A5 | Konsistensi konten | Halaman Tentang: "Jakarta Selatan" -> Yogyakarta |

## Fase B — Fitur
1. **Order WA dengan isi otomatis** - tombol `wa.me/62895602433100?text=Halo, saya mau pesan {Nama Menu} ({harga})`
2. **Modal detail menu (lightbox)**:
   - Klik kartu menu -> tampilan besar: gambar, nama, deskripsi, harga, tombol pesan
   - Tombol prev/next (◀ / ▶) pindah ke menu sebelumnya/berikutnya
   - Tutup via tombol x, klik backdrop, ESC; aksesibel (aria-modal, focus trap)
   - Komponen client (`use client`) reusable di homepage & /menu
3. **Testimoni - KOMBINASI 2 LAPIS (keputusan 2026-08-04)**:
   - **Lapisan 1 (otomatis):** Widget Google Reviews (free tier Trustindex/EmbedSocial) via `next/script`. Prasyarat: Google Business Profile terverifikasi (Fase E). Dipasang setelah GBP jadi.
   - **Lapisan 2 (manual):** 3-5 review terbaik dari GoBiz/GrabMerchant/ShopeeFood -> kartu statis di `lib/testimonials.ts` { nama, platform, rating, teks, tanggal, link }, dengan logo platform + atribusi. User mengirim konten review; sampai itu dipakai data contoh bertanda "ganti".
4. **Lengkapi data menu** (`menu-data.ts`) - tambah kategori minuman, snack, dessert supaya filter tidak kosong.

## Fase C — SEO Teknis
- `metadataBase` + canonical di root; meta unik per halaman (kata kunci lokal: sarapan, nasi liwet, gudeg, Yogyakarta, Danurejan)
- OG/Twitter image (1200x630, reuse `hero-bg.jpg`)
- JSON-LD `Restaurant` (komponen `JsonLd.tsx`): nama, alamat, geo, jam buka, telepon, menu, rentang harga, link GoFood/GrabFood/ShopeeFood, `servesCuisine`
- Performa (faktor ranking): `next/image` untuk semua gambar menu, `preconnect` Google Fonts
- sitemap & robots update mengikuti domain baru

## Fase D — Domain Kustom: `dapoergirli.shop` (SUDAH DIBELI)
- NS di Hostinger diarahkan ke NS Vercel (ns1/ns2/ns3.vercel-dns.com) - Cek status & tunggu propagasi (24-72 jam)
- Tambah domain di Vercel + link ke project `website-dapoer-girli`
- Redirect 301 dari `website-dapoer-girli.vercel.app` -> `dapoergirli.shop`
- Update `metadataBase`, sitemap, robots, canonical -> domain baru

## Fase E — Muncul di Google (gratis, butuh aksi user)
1. Google Search Console: verifikasi, submit sitemap, request indexing
2. Google Business Profile: listing Yogyakarta -> Google Maps; verifikasi telepon/SMS (prasyarat widget Google Reviews)
3. Bing Webmaster Tools (impor dari GSC)
4. Monitoring: GSC + Lighthouse

## Biaya
- Semua fase Rp 0 (kecuali domain yang sudah dibeli sendiri)
- Tidak ada dependency/library berbayar

## Urutan Commit (tiap push otomatis live via Vercel)
1. Fase A + B4 (data menu) -> 1 commit
2. Fase B1 + B3-lapisan2 (WA + testimoni manual) -> 1 commit
3. Fase B2 (modal menu) -> 1 commit
4. Fase C (SEO kode) -> 1 commit
5. Fase D (domain) -> saat DNS ready
6. Fase E -> butuh user (GSC/GBP)

## Pembagian Kerja
- **Kode (AI):** Fase A-C + persiapan verifikasi GSC
- **User:** (1) kirim 3-5 review GoFood/Grab/Shopee, (2) kabari nama domain saat DNS siap, (3) verifikasi Google Business Profile saat Fase E

## Ukuran Sukses
- Lighthouse >= 90
- Halaman terindex di GSC tanpa error
- Restoran muncul di Google Maps
- Hasil pencarian "sarapan Yogyakarta" menampilkan profil
