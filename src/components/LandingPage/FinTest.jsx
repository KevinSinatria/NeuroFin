<<<<<<< HEAD
import React from "react";
import FinTestImg from "../../assets/img/FinTest.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const FinTest = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse gap-2 items-center scroll-mt-20" id="finTest">
      <div className="flex flex-col flex-1 py-0 md:py-24 lg:py-30 px-16 md:px-28 lg:px-36 gap-4">
        <motion.h2
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[28px] lg:text-[36px] font-semibold"
        >
          <span className="text-[rgb(255,164,0)]">Yuk cek</span>, kamu orang
          yang <span className="text-[#38C3F5]">Impulsif</span> atau tidak?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: "-100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm text-[#4F5665]"
        >
          Kendalikan keuanganmu dengan mengenali seberapa impulsif dirimu!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0 }}
          viewport={{ once: true }}
          href="/financialcheck"
          className="max-w-[100%] bg-[#FFA400] mt-6 py-2 text-xs md:text-sm rounded-full text-white text-center font-semibold hover:bg-white hover:border-2 hover:border-[#FFA400] hover:text-[#FFA400] transition-all duration-200"
        >
          Mulai Tes
        </motion.a>
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs text-[#4F5665] text-center"
        >
          *gratis
        </motion.p>
      </div>
      <div className="md:flex-1 md:p-4 lg:p-16 md:flex md:items-center flex justify-center items-center mt-20 md:mt-0">
        <motion.img
          initial={{ opacity: 0, y: "60%", clipPath: "inset(0% 0% 100% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          src={FinTestImg}
          alt="Image"
          className="max-w-[100%] md:block"
        />
      </div>
    </section>
  );
};

export default FinTest;
=======
import React from "react";
import FinTestImg from "../../assets/img/FinTest.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const FinTest = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse gap-2 items-center scroll-mt-20" id="finTest">
      <div className="flex flex-col flex-1 py-0 md:py-24 lg:py-30 px-16 md:px-28 lg:px-36 gap-4">
        <motion.h2
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[28px] lg:text-[36px] font-semibold"
        >
          <span className="text-[rgb(255,164,0)]">Yuk cek</span>, kamu orang
          yang <span className="text-[#38C3F5]">Impulsif</span> atau tidak?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: "-100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm text-[#4F5665]"
        >
          Kendalikan keuanganmu dengan mengenali seberapa impulsif dirimu!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 0 }}
          viewport={{ once: true }}
          href="/financialcheck"
          className="max-w-[100%] bg-[#FFA400] mt-6 py-2 text-xs md:text-sm rounded-full text-white text-center font-semibold hover:bg-white hover:border-2 hover:border-[#FFA400] hover:text-[#FFA400] transition-all duration-200"
        >
          Mulai Tes
        </motion.a>
        <motion.p
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs text-[#4F5665] text-center"
        >
          *gratis
        </motion.p>
      </div>
      <div className="md:flex-1 md:p-4 lg:p-16 md:flex md:items-center flex justify-center items-center mt-20 md:mt-0">
        <motion.img
          initial={{ opacity: 0, y: "60%", clipPath: "inset(0% 0% 100% 0%)" }}
          whileInView={{ opacity: 1, y: "0%", clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          src={FinTestImg}
          alt="Image"
          className="max-w-[100%] md:block"
        />
      </div>
    </section>
  );
};

export default FinTest;
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
