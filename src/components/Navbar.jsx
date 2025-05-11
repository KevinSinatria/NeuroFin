import React, { useEffect, useState } from "react";
import NeoLogo from "../assets/icon/NeoLogoHD.png";
import { List, X } from "@phosphor-icons/react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

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
    <header className="sticky top-0 z-[1000] bg-white border-b border-b-gray-300 shadow">
      <nav className="flex gap-6 justify-between items-center px-6 py-4 lg:px-8">
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
          className={`absolute top-[60px] left-0 w-full bg-white lg:static lg:flex lg:gap-12 lg:w-auto transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "block opacity-100 scale-100 shadow-xl pb-4 border-b-[1px] lg:border-0 border-b-slate-600 pointer-events-auto"
              : "opacity-0 scale-95 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
          }`}
        >
          <ul className="flex flex-col ml-12 mt-2 lg:ml-0 lg:mt-0 lg:flex-row lg:items-center gap-4 lg:gap-10 text-slate-600 text-sm font-normal">
            <NavLink
              to="/#"
              text="Beranda"
              className={`hover:underline whitespace-nowrap transition-all 
              `}
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/#finTest"
              text="Cek Keuangan"
              className={`hover:underline whitespace-nowrap transition-all ${
                activeSection === "finTest"
                  ? "xl:text-sky-400 xl:font-semibold xl:text-base"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/#aboutUs"
              text="Tentang Kami"
              className={`hover:underline whitespace-nowrap transition-all ${
                activeSection === "aboutUs"
                  ? "xl:text-sky-400 xl:font-semibold xl:text-base"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/#howToUse"
              text="Cara Penggunaan"
              className={`hover:underline whitespace-nowrap transition-all ${
                activeSection === "howToUse"
                  ? "xl:text-sky-400 xl:font-semibold xl:text-base"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            />
          </ul>

          <hr className="mt-5" />

          <div className="mt-4 lg:mt-0 px-2 flex flex-col lg:flex-row gap-6 lg:gap-4">
            <button>
              <a
                href="/login"
                className="font-semibold border-2 text-sm md:text-base border-[#38C3F5] rounded-full text-[#38C3F5] px-6 py-2 lg:px-8 hover:bg-[#38C3F5] hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </a>
            </button>
            <button>
              <a
                href="/register"
                className="font-semibold border-2 text-sm md:text-base border-[#38C3F5] rounded-full px-6 py-2 lg:px-8 bg-[#38C3F5] text-white hover:bg-[#32B4E3] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Daftar
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ text, to, className, onClick }) => (
  <li className={className}>
    <a href={to} onClick={onClick}>
      {text}
    </a>
  </li>
);

export default Navbar;
