# Jahns Lewi: Personal Portfolio

Website portofolio minimalis, berkinerja tinggi, dan responsif dengan konsep **Warm Minimalist**, dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS v4** dengan standar ketat **antislop** (Dial: ENERGY 1 / RHYTHM 1 / MOTION 1).

---

## Fitur Utama

- **Warm Minimalist Design**: Palet warna tenang (#FAF9F6 latar warm off-white, #1A1A1A teks charcoal) dengan kontras tinggi (>12:1) yang ramah mata.
- **Bebas AI Slop**: Tanpa gradien ungu atau biru default, tanpa statistik fiktif, tanpa tombol mati, dan tanpa karakter em dash.
- **Fokus Rekayasa Riil**: Berfokus pada pilar Network & System Administration, CI/CD & Automation, Cloud Engineering (AWS & Azure), serta DevOps & IaC.
- **Interaksi Bermanfaat**: Fitur salin email satu klik ke clipboard dengan feedback visual langsung, tautan profil LinkedIn riil, dan komposer pesan email.
- **Aksesibilitas & Responsif**: Navigasi keyboard penuh (:focus-visible ring eksplisit), menu mobile ramah sentuhan (target ketukan minimal 44px), dan navigasi modal yang dapat ditutup dengan tombol Escape.

---

## Menjalankan Project

Buka terminal di folder project `C:\Users\jahns\Documents\code\jahnslewi`:

```bash
# Menjalankan development server
npm run dev

# Menjalankan linter
npm run lint

# Menjalankan build production
npm run build

# Menjalankan preview dari build production
npm run preview
```

---

## Struktur Direktori

```text
jahnslewi/
├── index.html         # HTML utama dengan metadata dan base style
├── package.json       # Skrip dan dependensi project
├── vite.config.js     # Konfigurasi Vite & Tailwind CSS v4
├── DESIGN.md          # Panduan arahan desain dan dial antislop
├── GEMINI.md          # Pointer konfigurasi antislop
└── src/
    ├── main.jsx       # Entrypoint React
    ├── App.jsx        # Komponen utama portofolio
    ├── Navbar.jsx     # Header navigasi responsif & aksesibel
    ├── index.css      # Variabel warna warm minimalist & reset CSS
    └── App.css        # Gaya tambahan jika diperlukan
```
