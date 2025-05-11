import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-4 md:mx-auto my-12 bg-white">
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Syarat & Ketentuan Penggunaan NeuroFin
          </h1>
        </header>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Pendahuluan</h2>
          <p className="mt-2 text-sm md:text-base leading-relaxed">
            Selamat datang di <strong>NeuroFin</strong>! Aplikasi ini dirancang
            untuk membantu pengguna dalam mengelola keuangan dengan lebih baik
            melalui pencatatan pengeluaran serta rekomendasi tabungan berbasis
            Machine Learning. Dengan menggunakan aplikasi ini, Anda setuju untuk
            mematuhi semua syarat dan ketentuan yang berlaku.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold">
            Akses & Penggunaan
          </h2>
          <ul className="mt-2 text-sm md:text-base list-disc list-inside space-y-2">
            <li>
              Pengguna harus membuat akun untuk mengakses fitur personal seperti
              pencatatan keuangan dan rekomendasi tabungan.
            </li>
            <li>
              Data yang dimasukkan harus valid dan tidak boleh mengandung
              informasi palsu.
            </li>
            <li>
              Penggunaan aplikasi ini hanya untuk keperluan pribadi dan tidak
              boleh disalahgunakan untuk tujuan yang melanggar hukum.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold">
            Hak & Kewajiban Pengguna
          </h2>
          <ul className="mt-2 text-sm md:text-base list-disc list-inside space-y-2">
            <li>
              Pengguna bertanggung jawab atas keamanan akun dan informasi
              pribadi mereka.
            </li>
            <li>
              Pengguna dilarang menyalahgunakan fitur AI untuk aktivitas yang
              tidak sesuai dengan tujuan aplikasi.
            </li>
            <li>
              Feedback atau laporan bug sangat dihargai untuk meningkatkan
              layanan.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold">
            Keamanan & Privasi
          </h2>
          <ul className="mt-2 text-sm md:text-base list-disc list-inside space-y-2">
            <li>
              Data pengguna disimpan dengan aman dan tidak akan dibagikan ke
              pihak ketiga tanpa izin.
            </li>
            <li>
              Machine Learning digunakan untuk memberikan rekomendasi keuangan
              tanpa melakukan keputusan otomatis yang merugikan pengguna.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold">
            Perubahan Ketentuan
          </h2>
          <p className="mt-2 text-sm md:text-base leading-relaxed">
            Syarat & Ketentuan ini dapat diperbarui sewaktu-waktu untuk
            meningkatkan layanan. Pengguna akan mendapatkan notifikasi jika ada
            perubahan penting.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Kontak</h2>
          <p className="mt-2 text-sm md:text-base leading-relaxed">
            Jika ada pertanyaan atau kendala, silakan hubungi tim NeuroFin
            melalui email:
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=neurofin14@gmail.com&su=Bantuan%20NeuroFin&body=Halo%20tim%20NeuroFin,"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              neurofin14@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;