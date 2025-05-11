<<<<<<< HEAD
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SecondSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] py-16 px-6 md:px-48 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 relative z-10 after:content-[''] after:w-20 after:h-1 after:bg-[#38C3F5] after:block after:mt-2"
      >
        Doom Spending
      </motion.h1>

      <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg shadow-md space-y-4 md:text-base text-sm text-gray-700 text-center">
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          <span className="text-[#38C3F5] font-semibold">Data</span> menunjukkan
          bahwa <span className="font-semibold">Gen Z</span> di Indonesia
          menghabiskan antara 18,69% hingga 70,59% dari pengeluaran mereka untuk
          pembelanjaan impulsif seperti makanan dan hiburan. Perilaku ini
          terjadi meskipun kondisi keuangan mereka belum stabil. Sekretariat
          Satgas Pasti OJK Hudiyanto mengamati fenomena ini dengan menyatakan
          bahwa anak muda Indonesia memiliki ekonomi yang belum kuat dengan uang
          yang pas-pasan, namun gaya hidup mereka sangat tinggi.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          Fenomena <span className="font-bold italic">doom spending</span> ini
          makin mengkhawatirkan ketika banyak Gen Z yang merasa tekanan sosial
          dari media sosial untuk selalu tampil trendi dan “up to date”. Gaya
          hidup konsumtif ini sering kali tidak dibarengi dengan literasi
          keuangan yang memadai. Akibatnya, banyak dari mereka yang rela
          mengambil paylater, kredit online, atau bahkan pinjaman demi memenuhi
          gaya hidup yang sebetulnya di luar kemampuan finansial mereka.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          Lebih parahnya lagi, sebagian dari mereka menganggap perilaku ini
          sebagai hal yang normal karena banyak teman sebaya yang melakukan hal
          serupa. Padahal, jika dibiarkan, kebiasaan ini bisa menjerumuskan
          mereka ke dalam siklus utang yang sulit diputus, dan berpotensi
          menghambat pencapaian finansial jangka panjang seperti membeli rumah,
          memulai usaha, atau menabung untuk masa depan.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          Oleh karena itu, sangat penting bagi Gen Z untuk mulai menyadari
          pentingnya perencanaan keuangan sejak dini. Dengan mengenali prioritas
          kebutuhan, membuat anggaran, dan mulai menabung atau berinvestasi
          secara rutin, generasi ini bisa membentuk fondasi keuangan yang lebih
          sehat dan stabil, tanpa harus mengorbankan kebahagiaan atau gaya
          hidup.
        </motion.p>
      </div>
    </section>
  );
};

export default SecondSection;
=======
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SecondSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] py-16 px-6 md:px-48 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 relative z-10 after:content-[''] after:w-20 after:h-1 after:bg-[#38C3F5] after:block after:mt-2"
      >
        Doom Spending
      </motion.h1>

      <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg shadow-md space-y-4 md:text-base text-sm text-gray-700 text-center">
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          <span className="text-[#38C3F5] font-semibold">Data</span> menunjukkan
          bahwa <span className="font-semibold">Gen Z</span> di Indonesia
          menghabiskan antara 18,69% hingga 70,59% dari pengeluaran mereka untuk
          pembelanjaan impulsif seperti makanan dan hiburan. Perilaku ini
          terjadi meskipun kondisi keuangan mereka belum stabil. Sekretariat
          Satgas Pasti OJK Hudiyanto mengamati fenomena ini dengan menyatakan
          bahwa anak muda Indonesia memiliki ekonomi yang belum kuat dengan uang
          yang pas-pasan, namun gaya hidup mereka sangat tinggi.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          Fenomena <span className="font-bold italic">doom spending</span> ini
          makin mengkhawatirkan ketika banyak Gen Z yang merasa tekanan sosial
          dari media sosial untuk selalu tampil trendi dan “up to date”. Gaya
          hidup konsumtif ini sering kali tidak dibarengi dengan literasi
          keuangan yang memadai. Akibatnya, banyak dari mereka yang rela
          mengambil paylater, kredit online, atau bahkan pinjaman demi memenuhi
          gaya hidup yang sebetulnya di luar kemampuan finansial mereka.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          Lebih parahnya lagi, sebagian dari mereka menganggap perilaku ini
          sebagai hal yang normal karena banyak teman sebaya yang melakukan hal
          serupa. Padahal, jika dibiarkan, kebiasaan ini bisa menjerumuskan
          mereka ke dalam siklus utang yang sulit diputus, dan berpotensi
          menghambat pencapaian finansial jangka panjang seperti membeli rumah,
          memulai usaha, atau menabung untuk masa depan.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:text-base text-sm text-center"
        >
          Oleh karena itu, sangat penting bagi Gen Z untuk mulai menyadari
          pentingnya perencanaan keuangan sejak dini. Dengan mengenali prioritas
          kebutuhan, membuat anggaran, dan mulai menabung atau berinvestasi
          secara rutin, generasi ini bisa membentuk fondasi keuangan yang lebih
          sehat dan stabil, tanpa harus mengorbankan kebahagiaan atau gaya
          hidup.
        </motion.p>
      </div>
    </section>
  );
};

export default SecondSection;
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
