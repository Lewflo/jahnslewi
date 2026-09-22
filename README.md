# Jahns Lewi — Personal Portfolio

Sebuah website portofolio modern, responsif, dan elegan dengan konsep **Clean Light / Minimalist**, dibangun menggunakan **React**, **Vite**, **Tailwind CSS v4**, dan **Lucide Icons**.

---

## 🚀 Fitur Utama

- **Clean & Minimalist Typography**: Desain terang, modern, dan rapi berbasis font *Plus Jakarta Sans*.
- **Data Terpusat**: Semua konten (bio, statistik, pengalaman kerja, proyek, keahlian, dan kontak) dapat dengan mudah diubah melalui satu file: [`src/data/portfolioData.js`](src/data/portfolioData.js).
- **Interactive Project Showcase**: Filter kategori proyek (All, Full Stack, Frontend, Backend, Mobile) dengan tautan demo dan repository GitHub.
- **Career & Education Timeline**: Riwayat pengalaman kerja dan latar belakang pendidikan (Computer Science @ BINUS University).
- **Skill Categorization**: Kategorisasi keahlian Frontend, Backend, dan Tools dalam kartu visual minimalis.
- **Interactive Contact Section**: Formulir kirim pesan interaktif, fitur copy email ke clipboard, serta tautan profil media sosial.
- **Mobile Responsive**: Tampilan optimal untuk perangkat desktop, tablet, dan smartphone.

---

## 🛠️ Menjalankan Project

Buka terminal di folder project `C:\Users\jahns\Documents\code\jahnslewi`:

```bash
# Menjalankan development server
npm run dev

# Menjalankan build production
npm run build

# Menjalankan preview dari build production
npm run preview
```

---

## 📁 Struktur Direktori

```text
jahnslewi/
├── index.html                  # File HTML utama dengan metadata dan font
├── package.json                # Skrip dan dependensi project
├── vite.config.js              # Konfigurasi Vite & Tailwind CSS
├── src/
│   ├── main.jsx                # Entrypoint React
│   ├── App.jsx                 # Komponen layout utama
│   ├── index.css               # Import Tailwind CSS & styling global
│   ├── data/
│   │   └── portfolioData.js    # Data konten portofolio yang mudah diedit
│   └── components/
│       ├── Navbar.jsx          # Header navigasi & status ketersediaan
│       ├── Hero.jsx            # Bagian perkenalan & statistik utama
│       ├── About.jsx           # Profil, prinsip rekayasa, dan edukasi
│       ├── Experience.jsx      # Riwayat pengalaman kerja & magang
│       ├── Projects.jsx        # Daftar proyek & filter kategori
│       ├── Skills.jsx          # Kategori keahlian & tools
│       ├── Contact.jsx         # Formulir pesan & fitur salin email
│       ├── Footer.jsx          # Footer & tombol kembali ke atas
│       └── Icons.jsx           # Ikon SVG (GitHub, LinkedIn, Twitter)
```

---

## ✏️ Cara Mengubah Konten Portofolio

Cukup buka file [`src/data/portfolioData.js`](src/data/portfolioData.js) dan sesuaikan:
- Nama, role, tagline, dan bio
- Riwayat pengalaman kerja dan pendidikan
- Daftar proyek, tautan GitHub, dan link live preview
- Daftar skill dan tingkat kemahiran
- Email dan tautan media sosial
