import React from "react";
import FirstSecImg from "../../assets/img/FirstSection.png";

const FirstSection = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col flex-1 py-24 px-26 gap-3">
        <div className="flex flex-col">
          <h2 className="font-semibold text-[40px]">
            Dari Impulsif ke Inisiatif:
          </h2>
          <h2 className="font-semibold text-[40px]">
            <span className="text-[#38C3F5]">Kendalikan</span> Pengeluaran Anda
          </h2>
        </div>
        <div>
          <p className="text-[#4F5665] font-thin text-xl mb-8">
            Ubah kebiasaan belanja impulsif menjadi tindakan finansial yang
            lebih bijak. Dengan pendekatan yang tepat.
          </p>
          <button className="bg-[#38C3F5] text-white text-lg font-semibold px-12 py-2 rounded-full hover:bg-white hover:border-2 hover:border-[#38C3F5] hover:text-[#38C3F5] transition-all">
            Mulai Sekarang
          </button>
        </div>
      </div>
      <div className="flex-1 p-16">
        <img className="max-w-[100%]" src={FirstSecImg} alt="Img" />
      </div>
    </div>
  );
};

export default FirstSection;
