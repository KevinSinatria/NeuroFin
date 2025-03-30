import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  Cardholder,
  CaretCircleRight,
  House,
  LightbulbFilament,
  Ranking,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHover, setIsHover] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavigation = (path) => {
    if (!isOpen) {
      toggleSideBar();
      setIsAnimating(true);
      setTimeout(() => {
        navigate(path);
        setIsAnimating(false);
      }, 300);
    } else {
      navigate(path);
    }
  };

  return (
    <div
      className={`fixed top-[72px ] flex flex-col left-0 h-screen z-1000 bg-slate-50 border-r transition-all duration-300 ${
        isOpen ? "w-[260px]" : "w-[80px]"
      }`}
    >
      <button
        className={`absolute bg-black rounded-full -translate-y-3 group left-[240px] top-[16px] transition-all ${
          isOpen ? "translate-0" : "-translate-x-45 rotate-0"
        }`}
        tabIndex="0"
        onClick={toggleSideBar}
        aria-label="Toggle show sidebar"
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
      <main className="flex  flex-[3] md:flex-[5] flex-col gap-4 items-start px-1 mt-8">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoverIndex === index;

          return (
            <motion.button
              key={item.id}
              className="relative w-full flex items-center gap-4 px-6 py-1 cursor-pointer rounded-md transition-all"
              onClick={() => handleNavigation(item.path)}
              disabled={isAnimating}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {isActive && (
                <motion.div
                  layoutId="active-border"
                  className="absolute -left-1 h-full w-[6px] rounded-tr-xl rounded-br-xl bg-blue-500"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
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
            </motion.button>
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
