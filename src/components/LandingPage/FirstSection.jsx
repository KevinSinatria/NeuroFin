import React from "react";
import FirstSecImg from "../../assets/img/FirstSection.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const FirstSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row py-8 mb-8 md:mb-0 gap-2">
      <div className="flex flex-col flex-1 pb-10 pt-8 px-12 md:py-12 lg:py-16 md:px-16 lg:px-26 gap-3">
        <motion.div
          animate={{ x: "0%", opacity: 1 }}
          initial={{ x: "-40%", opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h1 className="font-semibold text-[28px] md:text-[32px] lg:text-[32px]">
            Dari Impulsif ke Inisiatif:
          </h1>
          <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px]">
            <span className="text-[#38C3F5]">Kendalikan</span> Pengeluaran Anda
          </h2>
        </motion.div>
        <div>
          <motion.p
            animate={{ x: "0%", opacity: 1 }}
            initial={{ x: "40%", opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#4F5665] font-light text-sm md:text-base mb-8"
          >
            Ubah kebiasaan belanja impulsif menjadi tindakan finansial yang
            lebih bijak. Dengan pendekatan yang tepat.
          </motion.p>
          <motion.button
            animate={{ y: "0%", opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-[#38C3F5] text-white text-sm md:text-base font-semibold px-12 py-2 rounded-full hover:bg-white hover:border-2 hover:border-[#38C3F5] hover:text-[#38C3F5] transition-all"
          >
            <a href="/register">Mulai Sekarang</a>
          </motion.button>
        </div>
      </div>
      <motion.div
        animate={{ x: "0%", opacity: 1 }}
        initial={{ x: "40%", opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="md:flex-1 md:p-4 lg:p-16 md:flex md:items-center flex justify-center items-center mt-20 md:mt-0"
      >
        <img
          className="md:max-w-[100%] md:block max-w-[80%]"
          src={FirstSecImg}
          alt="Img"
        />
      </motion.div>
    </section>
  );
};

export default FirstSection;