import React, { useState } from "react";
import NeoLogo from "../../assets/icon/NeoLogoHD.png";
import {
  Cardholder,
  CaretCircleRight,
  House,
  LightbulbFilament,
  Ranking,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, label: "Beranda", icon: House, path: "/dashboard/home" },
    {
      id: 2,
      label: "Tantangan",
      icon: LightbulbFilament,
      path: "/dashboard/challenge",
    },
    {
      id: 3,
      label: "Pengeluaran Harian",
      icon: Cardholder,
      path: "/dashboard/spendingdiary",
    },
    {
      id: 4,
      label: "Papan Peringkat",
      icon: Ranking,
      path: "/dashboard/leaderboards",
    },
    { id: 5, label: "Akun Saya", icon: User, path: "/dashboard/myaccount" },
  ];

  return (
    <div
      className={`fixed top-0 flex flex-col left-0 h-screen z-1000 bg-slate-50 border-r transition-all duration-300 ${
        isOpen ? "w-[260px]" : "w-[80px]"
      }`}
    >
      <button
        className={`absolute bg-black rounded-full group left-[240px] top-[16px] transition-all ${
          isOpen ? "translate-0" : "-translate-x-45 rotate-0"
        }`}
        tabIndex="0"
        onClick={toggleSideBar}
      >
        <CaretCircleRight
          weight="fill"
          size={40}
          color="#00bcff"
          className={`group-hover:cursor-pointer transform transition-all ${
            isOpen ? "rotate-180 translate-0" : "rotate-0"
          }`}
        />
      </button>
      <header className="flex flex-col flex-1 justify-center items-start py-4 pl-4">
        <a
          href="/dashboard/home"
          className={`transition-all ${
            !isOpen ? "-translate-x-43 scale-110" : "translate-0"
          }`}
        >
          <img src={NeoLogo} alt="Logo" className="lg:max-w-50" />
        </a>
      </header>
      <main className="flex flex-[12] md:flex-[8] flex-col gap-4 items-start px-1 mt-8">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoverIndex === index;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-4 px-6 py-1 cursor-pointer rounded-md transition-all ${
                isActive
                  ? isOpen
                    ? "border-l-6 border-l-blue-500"
                    : ""
                  : "text-slate-500"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <item.icon
                size={30}
                weight="fill"
                color={
                  isActive
                    ? "oklch(0.588 0.158 241.966)"
                    : isHovered
                    ? "oklch(0.588 0.158 241.966)"
                    : "#45556c"
                }
              />
              <span
                className={`font-medium text-base transition-all ${
                  isActive
                    ? isOpen
                      ? "text-sky-600"
                      : "hidden"
                    : isOpen
                    ? isHovered
                      ? "text-sky-600"
                      : "text-slate-600"
                    : "hidden"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </main>
      <footer className="flex-1 md:flex-2 flex items-start">
        <NavLink
          className={`flex items-center gap-4 px-4 py-1 w-full mx-2 cursor-pointer mt-4 rounded-md transition-all hover:bg-red-100`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <SignOut
            size={30}
            weight="fill"
            className="rotate-180"
            color={isHover ? "oklch(0.704 0.191 22.216)" : "#45556c"}
          />
          <span
            className={`font-medium text-base ${
              isHover
                ? isOpen
                  ? "text-red-400"
                  : "hidden"
                : isOpen
                ? "text-slate-600"
                : "hidden"
            }`}
          >
            Keluar
          </span>
        </NavLink>
      </footer>
    </div>
  );
};

export default Sidebar;
