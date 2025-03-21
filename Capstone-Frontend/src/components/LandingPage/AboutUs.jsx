import React from "react";
import bank from "../../assets/img/AboutUs/bank.png";
import freeTest from "../../assets/img/AboutUs/free-test.png";
import gamifiedChallenges from "../../assets/img/AboutUs/gamified-challenges.png";
import leaderboards from "../../assets/img/AboutUs/leaderboards.png";
import metrikProgress from "../../assets/img/AboutUs/metrik-progress.png";
import OCR from "../../assets/img/AboutUs/OCR.png";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl">Tentang Kami</h2>
        <h2 className="font-semibold text-3xl">Tentang dan Fitur</h2>
        <div className="mt-2">
          <div className="border-b-6 border-[#38C3F5] flex items-center w-28"></div>
        </div>
        <div className="px-28 py-10 text-center">
          <p className="text-xl">
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
            para remaja dari
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
            <span className="text-[#FFA400] font-semibold"> tantangan </span>{" "}
            goals dengan didukung oleh{" "}
            <span className="text-[#38C3F5] font-semibold">
              {" "}
              Model Machine Learning
            </span>
            .
          </p>
        </div>
      </div>
      <div className="flex px-50 py-10 justify-between">
        <div className="flex flex-col items-center text-center max-w-[50px]">
          <img src={freeTest} alt="image" className="max-w-[60px]" />
          <h4 className="text-xl text-[#FFA400]">Test Gratis</h4>
        </div>
        <div className="flex flex-col items-center text-center max-w-[50px]">
          <img src={gamifiedChallenges} alt="img" className="max-w-[60px]"/>
          <h4 className="text-xl text-[#FFA400]">Tantangan Gamifikasi</h4>
        </div>
        <div className="flex flex-col items-center text-center max-w-[50px]">
          <img src={OCR} alt="img" className="max-w-[60px]" />
          <h4 className="text-xl text-[#FFA400]">OCR</h4>
        </div>
        <div className="flex flex-col items-center text-center max-w-[50px]">
          <img src={metrikProgress} alt="img" className="max-w-[60px]" />
          <h4 className="text-xl text-[#FFA400]">Metrik Progress</h4>
        </div>
        <div className="flex flex-col items-center text-center max-w-[50px]">
          <img src={leaderboards} alt="img" className="max-w-[60px]" />
          <h4 className="text-xl text-[#FFA400]">Papan Peringkat</h4>
        </div>
        <div className="flex flex-col items-center text-center max-w-[50px]">
          <img src={bank} alt="img" className="max-w-[60px]" />
          <h4 className="text-xl text-[#FFA400]">Tanpa Integrasi Bank</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
