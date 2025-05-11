<<<<<<< HEAD
import React from "react";
import register from "../../assets/img/HowtoUse/daftar-sekarang.png";
import setGoals from "../../assets/img/HowtoUse/set-goals.png";
import syaratKetentuan from "../../assets/img/HowtoUse/syarat-ketentuan.png";
import tantangan from "../../assets/img/HowtoUse/tantangan.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HowtoUse = () => {
  return (
    <section className="flex flex-col scroll-mt-26" id="howToUse">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Panduan
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-semibold text-xl md:text-2xl pb-2"
        >
          Cara Penggunaan
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-2"
        >
          <div className="border-b-4 border-[#38C3F5] flex items-center w-28"></div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 px-10 pt-8 mb-12">
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={syaratKetentuan} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Baca Syarat & Ketentuan
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Pahami aturan layanan NeuroFin agar kamu tahu cara kerja dan
            manfaatnya dengan jelas.
          </p>
          <ul>
            <NavLink
              text="Syarat & Ketentuan →"
              to="/termsandconditions"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={register} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Daftar di NeuroFin
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Buat akun untuk mendapatkan rekomendasi finansial yang tepat.
          </p>
          <ul>
            <NavLink
              text="Daftar →"
              to="/register"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 1.1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={setGoals} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Set Goals
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Tentukan tujuan keuanganmu, mulai dari menabung, investasi, hingga
            mengatur pengeluaran dengan lebih baik.
          </p>
          <ul>
            <NavLink
              text="Mulai sekarang →"
              to="/register"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 1.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={tantangan} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Selesaikan Tantangan
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Ikuti tantangan finansial untuk melatih kebiasaan baik dalam
            mengatur uang dan investasi.
          </p>
          <ul>
            <NavLink
              text="Mulai sekarang →"
              to="/register"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const NavLink = ({ text, to, className, style }) => (
  <li className={className}>
    <a href={to} style={style}>
      {text}
    </a>
  </li>
);

export default HowtoUse;
=======
import React from "react";
import register from "../../assets/img/HowtoUse/daftar-sekarang.png";
import setGoals from "../../assets/img/HowtoUse/set-goals.png";
import syaratKetentuan from "../../assets/img/HowtoUse/syarat-ketentuan.png";
import tantangan from "../../assets/img/HowtoUse/tantangan.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HowtoUse = () => {
  return (
    <section className="flex flex-col scroll-mt-26" id="howToUse">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Panduan
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-semibold text-xl md:text-2xl pb-2"
        >
          Cara Penggunaan
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-2"
        >
          <div className="border-b-4 border-[#38C3F5] flex items-center w-28"></div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 px-10 pt-8 mb-12">
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={syaratKetentuan} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Baca Syarat & Ketentuan
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Pahami aturan layanan NeuroFin agar kamu tahu cara kerja dan
            manfaatnya dengan jelas.
          </p>
          <ul>
            <NavLink
              text="Syarat & Ketentuan →"
              to="/termsandconditions"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={register} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Daftar di NeuroFin
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Buat akun untuk mendapatkan rekomendasi finansial yang tepat.
          </p>
          <ul>
            <NavLink
              text="Daftar →"
              to="/register"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 1.1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={setGoals} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Set Goals
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Tentukan tujuan keuanganmu, mulai dari menabung, investasi, hingga
            mengatur pengeluaran dengan lebih baik.
          </p>
          <ul>
            <NavLink
              text="Mulai sekarang →"
              to="/register"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
            clipPath: "inset(0% 0% 0% -100%)",
          }}
          whileInView={{ opacity: 1, x: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.4, delay: 1.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-4 px-10 py-10 border-2 border-slate-500 rounded-[18px] shadow-xs shadow-sky-300 flex-1"
        >
          <figure>
            <img src={tantangan} alt="image" className="max-w-[80px]" />
          </figure>
          <h3 className="text-sm md:text-base font-semibold text-[#38C3F5]">
            Selesaikan Tantangan
          </h3>
          <p className="text-[10px] md:text-xs text-center">
            Ikuti tantangan finansial untuk melatih kebiasaan baik dalam
            mengatur uang dan investasi.
          </p>
          <ul>
            <NavLink
              text="Mulai sekarang →"
              to="/register"
              className="hover:underline text-sm text-[#0061E0]"
            />
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const NavLink = ({ text, to, className, style }) => (
  <li className={className}>
    <a href={to} style={style}>
      {text}
    </a>
  </li>
);

export default HowtoUse;
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
