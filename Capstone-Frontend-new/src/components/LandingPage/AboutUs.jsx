import React from "react";
import bank from "../../assets/img/AboutUs/bank.png";
import freeTest from "../../assets/img/AboutUs/free-test.png";
import gamifiedChallenges from "../../assets/img/AboutUs/gamified-challenges.png";
import leaderboards from "../../assets/img/AboutUs/leaderboards.png";
import metrikProgress from "../../assets/img/AboutUs/metrik-progress.png";
import OCR from "../../assets/img/AboutUs/OCR.png";

const AboutUs = () => {
  return (
    <section className="flex flex-col my-20 scroll-mt-24" id="aboutUs">
      <div className="flex flex-col items-center">
        <h2 className="text-xl">About Us</h2>
        <h2 className="font-semibold text-2xl md:text-3xl">Tentang dan Fitur</h2>
        <div className="mt-2">
          <div className="border-b-6 border-[#38C3F5] flex items-center w-28"></div>
        </div>
        <div className="px-16 md:px-24 lg:px-28 py-10 text-center">
          <p className="text-base md:text-lg">
            <span className="text-[#38C3F5] font-bold">NeuroFin</span> adalah
            sebuah aplikasi website yang bertujuan untuk
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
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-50 py-10">
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <img src={freeTest} alt="image" className="max-w-[60px]" />
          <h4 className="text-base md:text-lg text-[#FFA400]">Test Gratis</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <img src={gamifiedChallenges} alt="img" className="max-w-[60px]" />
          <h4 className="text-base md:text-lg text-[#FFA400]">Tantangan Gamifikasi</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <img src={OCR} alt="img" className="max-w-[60px]" />
          <h4 className="text-base md:text-lg text-[#FFA400]">OCR</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <img src={metrikProgress} alt="img" className="max-w-[60px]" />
          <h4 className="text-base md:text-lg text-[#FFA400]">Metrik Progress</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <img src={leaderboards} alt="img" className="max-w-[60px]" />
          <h4 className="text-base md:text-lg text-[#FFA400]">Papan Peringkat</h4>
        </div>
        <div className="flex flex-col items-center justify-center justify-self-center text-center max-w-[50px]">
          <img src={bank} alt="img" className="max-w-[60px]" />
          <h4 className="text-base md:text-lg text-[#FFA400]">Tanpa Integrasi Bank</h4>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
