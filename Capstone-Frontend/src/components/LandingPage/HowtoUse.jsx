import React from "react";
import register from "../../assets/img/HowtoUse/daftar-sekarang.png";
import setGoals from "../../assets/img/HowtoUse/set-goals.png";
import syaratKetentuan from "../../assets/img/HowtoUse/syarat-ketentuan.png";
import tantangan from "../../assets/img/HowtoUse/tantangan.png";

const HowtoUse = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <h2 className="text-xl">How to Use</h2>
        <h2 className="font-semibold text-3xl">Cara Penggunaan</h2>
        <div className="mt-2">
          <div className="border-b-6 border-[#38C3F5] flex items-center w-28"></div>
        </div>
      </div>
      <div className="flex gap-4 px-10 pt-8" style={{ margin: "40px 0" }}>
        <div
          className="flex flex-col justify-center items-center gap-1 px-10 py-10"
          style={{ borderRadius: "18px", borderWidth: "2px", flex: "1" }}
        >
          <figure>
            <img src={syaratKetentuan} alt="image" className="max-w-[100px]" />
          </figure>
          <h3 className="text-lg font-semibold text-[#38C3F5]">
            Baca Syarat & Ketentuan
          </h3>
          <p style={{ fontSize: "12px" }}>
            Pahami aturan layanan NeuroFin agar kamu tahu cara kerja dan
            manfaatnya dengan jelas.
          </p>
          <ul>
            <NavLink
              text="Syarat & Ketentuan →"
              to="#"
              style={{ color: "#0061E0" }}
              className="hover:underline"
            />
          </ul>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-1 px-10 py-10"
          style={{ borderRadius: "18px", borderWidth: "2px", flex: "1" }}
        >
          <figure>
            <img src={syaratKetentuan} alt="image" className="max-w-[100px]" />
          </figure>
          <h3 className="text-lg font-semibold text-[#38C3F5]">
            Baca Syarat & Ketentuan
          </h3>
          <p style={{ fontSize: "12px" }}>
            Pastikan kamu memahami semua aturan sebelum menggunakan NeuroFin.
            Ini penting agar kamu tahu cara kerja layanan kami dan manfaat yang
            bisa kamu dapatkan.
          </p>
          <ul>
            <NavLink
              text="Syarat & Ketentuan →"
              to="#"
              style={{ color: "#0061E0" }}
              className="hover:underline"
            />
          </ul>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-1 px-10 py-10"
          style={{ borderRadius: "18px", borderWidth: "2px", flex: "1" }}
        >
          <figure>
            <img src={syaratKetentuan} alt="image" className="max-w-[100px]" />
          </figure>
          <h3 className="text-lg font-semibold text-[#38C3F5]">
            Baca Syarat & Ketentuan
          </h3>
          <p style={{ fontSize: "12px" }}>
            Pastikan kamu memahami semua aturan sebelum menggunakan NeuroFin.
            Ini penting agar kamu tahu cara kerja layanan kami dan manfaat yang
            bisa kamu dapatkan.
          </p>
          <ul>
            <NavLink
              text="Syarat & Ketentuan →"
              to="#"
              style={{ color: "#0061E0" }}
              className="hover:underline"
            />
          </ul>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-1 px-10 py-10"
          style={{ borderRadius: "18px", borderWidth: "2px", flex: "1" }}
        >
          <figure>
            <img src={syaratKetentuan} alt="image" className="max-w-[100px]" />
          </figure>
          <h3 className="text-lg font-semibold text-[#38C3F5]">
            Baca Syarat & Ketentuan
          </h3>
          <p style={{ fontSize: "12px" }}>
            Pahami aturan layanan NeuroFin agar kamu tahu cara kerja dan
            manfaatnya dengan jelas.
          </p>
          <ul>
            <NavLink
              text="Syarat & Ketentuan →"
              to="#"
              style={{ color: "#0061E0" }}
              className="hover:underline"
            />
          </ul>
        </div>
      </div>
    </div>
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
