import React from "react";
import FinTestImg from "../../assets/img/FinTest.png";
import { NavLink } from "react-router";

const FinTest = () => {
  return (
    <section className="flex gap-2 items-center scroll-mt-20" id="finTest">
      <div className="flex flex-col flex-1 py-16 md:py-24 lg:py-30 px-16 md:px-28 lg:px-36 gap-2">
        <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold">
          <span className="text-[rgb(255,164,0)]">Yuk cek</span>, Kamu orang yang{" "}
          <span className="text-[#38C3F5]">Impulsif</span> atau tidak?
        </h2>
        <p className="text-base text-[#4F5665]">
          Kendalikan keuanganmu dengan mengenali seberapa impulsif dirimu!
        </p>
        <NavLink to='/financialcheck' className="max-w-[100%] bg-[#FFA400] mt-6 py-2 rounded-full text-white text-center font-semibold hover:bg-white hover:border-2 hover:border-[#FFA400] hover:text-[#FFA400] transition-all duration-200">
          Mulai Tes
        </NavLink>
        <p className="text-base text-[#4F5665] text-center">*free</p>
      </div>
      <div className="md:flex-1 md:p-16 md:flex md:items-center hidden">
        <img src={FinTestImg} alt="Image" className="md:max-w-[100%] md:block hidden" />
      </div>
    </section>
  );
};

export default FinTest;
