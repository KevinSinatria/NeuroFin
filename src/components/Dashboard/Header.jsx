import { Sun, User } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setHeaderTitle("Welcome, User!");
    }
    if (location.pathname === "/dashboard/challenge") {
      setHeaderTitle("Tantangan");
    }
    if (location.pathname === "/dashboard/spendingdiary") {
      setHeaderTitle("Pengeluaran Harian");
    }
    if (location.pathname === "/dashboard/leaderboards") {
      setHeaderTitle("Papan Peringkat");
    }
    if (location.pathname === "/dashboard/myaccount") {
      setHeaderTitle("Akun Saya");
    }
  }, [location.pathname]);

  return (
    <header className="flex justify-between w-auto bg-white items-center px-3 md:px-10 py-2">
      <div>
        {" "}
        <h1 className="md:text-2xl font-semibold">{headerTitle}</h1>
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
