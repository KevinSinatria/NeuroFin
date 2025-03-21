import React from "react";
import FinTestImg from "../../assets/img/FinTest.png";

const FinTest = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex flex-col flex-1 py-30 px-36 gap-2">
        <h2 className="text-[40px] font-semibold">
          <span className="text-[#FFA400]">Yuk cek</span>, Kamu orang yang{" "}
          <span className="text-[#38C3F5]">Impulsif</span> atau tidak
        </h2>
        <p className="text-base text-[#4F5665]">
          Kendalikan keuanganmu dengan mengenali seberapa impulsif dirimu!
        </p>
        <button className="max-w-[100%] bg-[#FFA400] mt-6 py-2 rounded-full text-white font-semibold hover:bg-white hover:border-2 hover:border-[#FFA400] hover:text-[#FFA400] transition-all duration-200">
          Mulai Tes
        </button>
        <p className="text-base text-[#4F5665] text-center">*free</p>
      </div>
      <div className="flex-1 p-16">
        <img src={FinTestImg} alt="Image" className="max-w-[100%]" />
      </div>
    </div>
  );
};

export default FinTest;
