import React from "react";
import "../css/output.css";
import NeoLogo from "../assets/icon/NeoLogoHD.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[1000] bg-white border-b-[1px] border-b-slate-600">
      <nav className="flex px-16 py-4 items-center justify-between">
        <div className="p-1">
          <img src={NeoLogo} alt="" className="w-[192px]" />
        </div>
        <div className="ml-48">
          <ul className="flex gap-12 font-normal text-base text-slate-600">
            <NavLink
              to="#"
              text="Tentang Kami"
              className="hover:underline transition-all"
            />
            <NavLink
              to="#"
              text="Cek Keuangan"
              className="hover:underline transition-all"
            />
            <NavLink
              to="#"
              text="Cara Penggunaan"
              className="hover:underline transition-all"
            />
          </ul>
        </div>
        <div className="ml-40 mr-8">
          <ul className="flex items-center gap-12 font-normal text-base">
            <NavLink
              to="#"
              text="Masuk"
              className="font-semibold hover:underline"
            />
            <NavLink
              to="#"
              text="Daftar"
              className="font-semibold border-2 border-[#38C3F5] rounded-full  text-[#38C3F5] px-8 py-2 hover:bg-[#38C3F5] hover:text-white transition-all duration-200"
            />
          </ul>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ text, to, className }) => (
  <li className={className}>
    <a href={to}>{text}</a>
  </li>
);

export default Navbar;
