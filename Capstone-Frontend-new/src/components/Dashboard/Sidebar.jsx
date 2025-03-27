import React from "react";
import NeoLogo from "../../assets/icon/NeoLogoHD.png";
import HomeIcon from "../../assets/icon/Dashboard/HomeLogo.png";
import { Cardholder, House, LightbulbFilament, Ranking, User } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <div className="bg-slate-50 border-r h-screen w-65">
      <header className="flex justify-center items-center py-4 box-border">
        <a href="/dashboard/home">
          <img src={NeoLogo} alt="" className="lg:max-w-50" />
        </a>
      </header>
      <main className="flex flex-col gap-4 items-start px-1 mt-8">
        <a href="#" className="w-full flex items-center gap-4 px-6 py-1 cursor-pointer">
          <House size={30} weight="fill" color="#B1B1B1" />
          <span className="font-medium text-base text-slate-500">Beranda</span>
        </a>
        <a href="#" className="w-full flex items-center gap-4 px-6 py-1 cursor-pointer">
          <LightbulbFilament size={30} weight="fill" color="#B1B1B1" />
          <span className="font-medium text-base text-slate-500">Tantangan</span>
        </a>
        <a href="#" className="w-full flex items-center gap-4 px-6 py-1 cursor-pointer">
          <Cardholder size={30} weight="fill" color="#B1B1B1" />
          <span className="font-medium text-base text-slate-500">Pengeluaran Harian</span>
        </a>
        <a href="#" className="w-full flex items-center gap-4 px-6 py-1 cursor-pointer">
          <Ranking size={30} weight="fill" color="#B1B1B1" />
          <span className="font-medium text-base text-slate-500">Papan Peringkat</span>
        </a>
        <a href="#" className="w-full flex items-center gap-4 px-6 py-1 cursor-pointer">
          <User size={30} weight="fill" color="#B1B1B1" />
          <span className="font-medium text-base text-slate-500">Akun Saya</span>
        </a>
      </main>
    </div>
  );
};

export default Sidebar;
