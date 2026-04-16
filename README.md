# Aplikasi Kesra Satu Data

Aplikasi web untuk manajemen data Kesra (Kesejahteraan Rakyat) satu data untuk Kecamatan Muara Komam.

## Fitur Utama

### Sistem Akses
- **Admin Desa**: 12 desa/kelurahan dengan username/password custom
- **Verifikator**: Akses untuk verifikasi dan validasi data
- **Persentase Data**: Tampilan persentase semua data

### Menu Data (16 Menu)
1. **Data Keluarga Sasaran**: Tidak Mampu, BLT DD, PKH, BPNT, BPJS Kesehatan
2. **Jumlah Stunting**: Data stunting per desa
3. **Jumlah Posyandu**: Data posyandu per desa
4. **Nama Posyandu**: Daftar nama posyandu per desa
5. **Mesjid/Mushola/Langgar**: Data tempat ibadah per desa
6. **TP Alquran**: Data TP Alquran per desa
7. **Majelis Taklim**: Data majelis taklim per desa
8. **Jumlah Sekolah**: Data jumlah sekolah per desa
9. **Sekolah TK**: Data sekolah TK per desa
10. **Sekolah SD/MI**: Data sekolah SD/MI per desa
11. **Sekolah SMP/MTS**: Data sekolah SMP/MTS per desa
12. **Sekolah SMA/MA/SMK**: Data sekolah SMA/MA/SMK per desa
13. **Pengurus Mesjid (Ketua)**: Data ketua pengurus mesjid
14. **Pengurus Mesjid (Bendahara)**: Data bendahara pengurus mesjid
15. **Pengurus Mesjid (Sekretaris)**: Data sekretaris pengurus mesjid
16. **Pengurus Mesjid (Marbot)**: Data marbot mesjid

### Detail Data
- **Data Keluarga Sasaran**: Nama, NIK, RT/RW, Alamat, Desa (otomatis), Pekerjaan, Jenis Kelamin, Status
- **Data Stunting**: Jumlah, Tahun, Status
- **Data Posyandu**: Nama, Desa (otomatis), RT/RW, Alamat
- **Data Tempat Ibadah**: Jenis, Nama, Desa (otomatis), RT/RW, Alamat
- **Data Sekolah**: Nama, Desa (otomatis), RT/RW, Alamat, Jumlah Guru, Jumlah Siswa
- **Data Pengurus Mesjid**: Nama Mesjid, Jabatan, Nama Lengkap, NIK, Nomor HP, Desa (otomatis), RT/RW, Alamat

### Fitur Tambahan
- **Download Data**: Ekspor ke Excel (.csv), Word (.doc), dan PDF (.pdf)
- **Edit Data**: Admin desa dapat mengedit data desa sendiri
- **Hapus Data**: Verifikator dapat menghapus data perorangan
- **Pencarian**: Cari data berdasarkan nama
- **Filter**: Filter data per desa
- **Persentase**: Tampilan persentase data per kategori

## Cara Menjalankan

1. Buka `index.html` di browser
2. Login menggunakan salah satu akun berikut:

### Akun Desa
- `Desa Batu Botuk` / `batubotuk123`
- `Desa Selerong` / `selerong123`
- `Kelurahan Muara Komam` / `muarakomam123`
- `Desa Muara Langon` / `muaralangon123`
- `Desa Sekuan Makmur` / `sekuanmakmur123`
- `Desa Uko` / `uko123`
- `Desa Binangon` / `binangon123`
- `Desa Muara Kuaro` / `muarakuaro123`
- `Desa Prayon` / `prayon123`
- `Desa Muara Payng` / `muarapayng123`
- `Desa Lusan` / `lusan123`
- `Desa Long Sayo` / `longsayo123`
- `Desa Swan Slutung` / `swanslutung123`

### Akun Verifikator
- `Verifikator` / `verifikator123`

## Struktur Data

Data tersimpan secara lokal di browser menggunakan `localStorage` dengan format JSON.

## Teknologi
- HTML5
- CSS3
- JavaScript ES6+
- XLSX (Excel)
- JSZip (ZIP)
- jsPDF (PDF)

## Lisensi
Aplikasi ini adalah proyek open source untuk keperluan pemerintahan desa.