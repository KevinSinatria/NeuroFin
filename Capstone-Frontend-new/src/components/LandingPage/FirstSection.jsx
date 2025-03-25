import React from "react";
import FirstSecImg from "../../assets/img/FirstSection.png";

const FirstSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-2">
      <div className="flex flex-col flex-1 pb-10 pt-8 px-12 md:py-12 lg:py-24 md:px-16 lg:px-26 gap-3">
        <div className="flex flex-col">
          <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px]">
            Dari Impulsif ke Inisiatif:
          </h2>
          <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px]">
            <span className="text-[#38C3F5]">Kendalikan</span> Pengeluaran Anda
          </h2>
        </div>
        <div>
          <p className="text-[#4F5665] font-thin text-base md:text-xl mb-8">
            Ubah kebiasaan belanja impulsif menjadi tindakan finansial yang
            lebih bijak. Dengan pendekatan yang tepat.
          </p>
          <button className="bg-[#38C3F5] text-white text-base md:text-lg font-semibold px-12 py-2 rounded-full hover:bg-white hover:border-2 hover:border-[#38C3F5] hover:text-[#38C3F5] transition-all">
            Mulai Sekarang
          </button>
        </div>
      </div>
      <div className="md:flex-1 md:p-4 lg:p-16 md:flex md:items-center flex justify-center items-center mt-20 md:mt-0">
        <img className="md:max-w-[100%] md:block max-w-[80%]" src={FirstSecImg} alt="Img" />
      </div>
    </section>
  );
};

export default FirstSection;
