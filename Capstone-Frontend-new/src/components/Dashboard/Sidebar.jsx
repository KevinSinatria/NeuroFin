import React, { createContext, useContext, useState } from "react";
import NeoLogo from "../../assets/icon/NeoLogoHD.png";
import { CaretLineLeft, CaretLineRight, SignOut } from "@phosphor-icons/react";
import { NavLink } from "react-router";

const SidebarContext = createContext();
export const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      className={`h-screen md:sticky fixed z-300 md:z-90 left-0 top-0 transition-all duration-300 ${
        expanded ? "w-[260px] shadow-2xl md:shadow" : "w-[72px]"
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r border-r-gray-300 shadow-sm">
        <div
          className={`p-4 pb-2 flex justify-center ${
            expanded ? "gap-7" : ""
          } items-end`}
        >
          <img
            src={NeoLogo}
            alt="Logo"
            className={`overflow-hidden transition-all ${
              expanded ? "w-36" : "w-0"
            }`}
          />
          <button
            className="p-1.5 rounded-lg text-lg bg-gray-200 hover:bg-gray-300"
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? (
              <CaretLineLeft weight="bold" />
            ) : (
              <CaretLineRight weight="bold" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-2">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t border-t-gray-600">
          <a
            className={`relative flex justify-center group transition-all items-center py-2 px-3 mx-1 my-1 font-medium rounded-md cursor-pointer hover:bg-red-100`}
          >
            <SignOut
              size={20}
              weight="fill"
              className="rotate-180 group-hover:text-red-400 transition-all min-w-[30px]"
            />

            <span
              className={`font-medium whitespace-nowrap group-hover:text-red-400 overflow-hidden text-sm transition-all ${
                expanded ? "w-52 ml-3" : "w-0 ml-0"
              }`}
            >
              Keluar
            </span>
            {!expanded && (
              <div
                className={`absolute z-90 left-full rounded-md px-2 py-1 ml-6 bg-red-100 text-red-800 shadow-black/40 shadow-lg text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
              >
                Keluar
              </div>
            )}
          </a>
        </div>
      </nav>
    </aside>
  );
};

// eslint-disable-next-line no-unused-vars
export const SidebarItem = ({ icon: Icon, text, active, link }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li className="my-1 group">
      <NavLink
        to={link}
        className={`relative flex items-center py-2 px-3 w-full h-auto font-medium rounded-md cursor-pointer transition-colors ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        <Icon size={20} className="min-w-[20px]" />
        <span
          className={`overflow-hidden whitespace-nowrap text-sm transition-all ${
            expanded ? "w-52 ml-3" : "w-0 ml-0"
          }`}
        >
          {text}
        </span>
        {!expanded && (
          <div
            className={`absolute z-90 left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 shadow-black/40 shadow-lg text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </NavLink>
    </li>
  );
};
