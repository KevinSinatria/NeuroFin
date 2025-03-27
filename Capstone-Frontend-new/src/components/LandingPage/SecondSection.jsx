import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const SecondSection = () => {
  return (
    <div className="flex flex-col px-16 md:px-48 gap-4 items-center my-20">
      <motion.h1
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:text-3xl text-2xl font-semibold"
      >
        Doom Spending
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="md:text-lg text-base text-center"
      >
        <span className="text-[#38C3F5] font-semibold">Data</span> menunjukkan
        bahwa <span className="font-semibold">Gen Z</span> di Indonesia
        menghabiskan antara 18,69% hingga 70,59% dari pengeluaran mereka untuk
        pembelanjaan impulsif seperti makanan dan hiburan. Perilaku ini terjadi
        meskipun kondisi keuangan mereka belum stabil. Sekretariat Satgas Pasti
        OJK Hudiyanto mengamati fenomena ini dengan menyatakan bahwa anak muda
        Indonesia memiliki ekonomi yang belum kuat dengan uang yang pas-pasan,
        namun gaya hidup mereka sangat tinggi.
      </motion.p>
    </div>
  );
};

export default SecondSection;
