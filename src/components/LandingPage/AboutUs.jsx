import React from "react";
import bank from "../../assets/img/AboutUs/bank.png";
import freeTest from "../../assets/img/AboutUs/free-test.png";
import gamifiedChallenges from "../../assets/img/AboutUs/gamified-challenges.png";
import leaderboards from "../../assets/img/AboutUs/leaderboards.png";
import metrikProgress from "../../assets/img/AboutUs/metrik-progress.png";
import OCR from "../../assets/img/AboutUs/OCR.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <section className="flex flex-col my-20 scroll-mt-24" id="aboutUs">
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Tentang Kami
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: "-100%", clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-semibold text-xl md:text-2xl"
        >
          Tentang dan Fitur
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
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="px-16 md:px-24 lg:px-28 py-4 text-center"
        >
          <p className="text-sm md:text-base">
            <span className="text-[#38C3F5] font-bold">NeuroFin</span> adalah
            sebuah aplikasi web yang bertujuan untuk
            <span className="text-[#FFA400] font-semibold">
              {" "}
              membantu mencatat pengeluaran{" "}
            </span>
            dan
            <span className="text-[#FFA400] font-semibold">
              {" "}
              membangun kebiasaan baik
            </span>{" "}
            para generasi muda dan siapa saja dari
            <span className="text-[#FFA400] font-semibold">
              {" "}
              waktu ke waktu{" "}
            </span>
            dengan mengubah{" "}
            <span className="text-[#FFA400] font-semibold">
              {" "}
              persepsi{" "}
            </span>{" "}
            mengelola keuangan yang
            <span className="text-[#FFA400] font-semibold"> membosankan </span>
            menjadi sebuah{" "}
            <span className="text-[#FFA400] font-semibold">
              {" "}
              tantangan{" "}
            </span>{" "}
            goals dengan didukung oleh{" "}
            <span className="text-[#38C3F5] font-semibold">
              {" "}
              Model Machine Learning
            </span>
            .
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-0 md:px-50 py-10">
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <motion.img
            initial={{
              opacity: 0,
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            src={freeTest}
            alt="image"
            className="max-w-[60px]"
          />
          <h4 className="text-sm md:text-base text-[#FFA400]">Test Gratis</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <motion.img
            initial={{
              opacity: 0,
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
            src={gamifiedChallenges}
            alt="img"
            className="max-w-[60px]"
          />
          <h4 className="text-sm md:text-base text-[#FFA400]">
            Tantangan Gamifikasi
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <motion.img
            initial={{
              opacity: 0,
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{ duration: 0.2, delay: 0.5 }}
            viewport={{ once: true }}
            src={OCR}
            alt="img"
            className="max-w-[60px]"
          />
          <h4 className="text-sm md:text-base text-[#FFA400]">OCR</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <motion.img
            initial={{
              opacity: 0,
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{ duration: 0.2, delay: 0.7 }}
            viewport={{ once: true }}
            src={metrikProgress}
            alt="img"
            className="max-w-[60px]"
          />
          <h4 className="text-sm md:text-base text-[#FFA400]">
            Metrik Progress
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <motion.img
            initial={{
              opacity: 0,
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{ duration: 0.2, delay: 0.9 }}
            viewport={{ once: true }}
            src={leaderboards}
            alt="img"
            className="max-w-[60px]"
          />
          <h4 className="text-sm md:text-base text-[#FFA400]">
            Papan Peringkat
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <motion.img
            initial={{
              opacity: 0,
              y: "100%",
              clipPath: "inset(0% 0% 100% 0%)",
            }}
            whileInView={{
              opacity: 1,
              y: "0%",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
            transition={{ duration: 0.2, delay: 1.1 }}
            viewport={{ once: true }}
            src={bank}
            alt="img"
            className="max-w-[60px]"
          />
          <h4 className="text-sm md:text-base text-[#FFA400]">
            Tanpa Integrasi Bank
          </h4>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
