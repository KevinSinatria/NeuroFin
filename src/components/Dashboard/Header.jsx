import { Sun, User } from "@phosphor-icons/react";
import React from "react";
import NeoLogo from "../../assets/icon/NeoLogoHD.png";


const Header = () => {
  return (
    <header className="flex justify-between w-auto bg-white items-center px-3 md:px-10 py-4">
      <a
        href="/dashboard/home"
        className={`transition-all`}
      >
        <img src={NeoLogo} alt="Logo" className="max-w-32 md:max-w-50" />
      </a>
      <div>
        <h1 className="md:text-2xl font-semibold">Welcome, User!</h1>
      </div>
      <div className="flex gap-4">
        <button aria-label="Toggle dark mode">
          <Sun size={32} className="bg-slate-100 p-1 rounded-full" />
        </button>
        <a
          href="/dashboard/myaccount"
          className="group"
          aria-label="Link to user account page"
        >
          <User
            size={40}
            className="bg-slate-200 p-1 rounded-full border group-hover:scale-101"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
