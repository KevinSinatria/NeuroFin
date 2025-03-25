import React, { useEffect, useState } from "react";
import NeoLogo from "../assets/icon/NeoLogoHD.png";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-[1000] bg-white border-b-[1px] border-b-slate-600">
      <nav className="flex justify-between items-center px-6 py-4 lg:px-16">
        <div>
          <a href="/#">
            <img
              src={NeoLogo}
              alt="NeoLogo"
              className="max-w-[144px] lg:max-w-[168px] xl:max-w-[192px]"
            />
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        <div
          className={`absolute top-[60px] left-0 w-full bg-white lg:static lg:flex lg:gap-18 lg:w-auto ${
            isOpen ? "block pb-4 border-b-[1px] border-b-slate-600" : "hidden"
          }`}
        >
          <ul className="flex flex-col pl-10 mt-2 lg:flex-row lg:items-center gap-4 lg:gap-12 text-slate-600 text-base font-normal">
            <NavLink
              to="/#finTest"
              text="Cek Keuangan"
              className={`hover:underline whitespace-nowrap transition-all ${
                activeSection === "finTest"
                  ? "xl:text-sky-400 xl:font-semibold xl:text-lg"
                  : ""
              }`}
            />
            <NavLink
              to="/#aboutUs"
              text="Tentang Kami"
              className={`hover:underline whitespace-nowrap transition-all ${
                activeSection === "aboutUs"
                  ? "xl:text-sky-400 xl:font-semibold xl:text-lg"
                  : ""
              }`}
            />
            <NavLink
              to="/#howToUse"
              text="Cara Penggunaan"
              className={`hover:underline whitespace-nowrap transition-all ${
                activeSection === "howToUse"
                  ? "xl:text-sky-400 xl:font-semibold xl:text-lg"
                  : ""
              }`}
            />
          </ul>

          <div className="mt-4 lg:mt-0 px-10 flex flex-col lg:flex-row gap-2 lg:gap-4">
            <NavLink
              to="#"
              text="Masuk"
              className="font-semibold border-2 border-[#38C3F5] rounded-full text-[#38C3F5] px-6 py-2 hover:bg-[#38C3F5] hover:text-white transition-all duration-200 list-none"
            />
            <NavLink
              to="#"
              text="Daftar"
              className="font-semibold border-2 border-[#38C3F5] rounded-full px-6 py-2 bg-[#38C3F5] text-white hover:bg-[#32B4E3] transition-all duration-200 list-none"
            />
          </div>
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
