import React from "react";
import Header from "../src/components/Dashboard/Header";
import { Sidebar, SidebarItem } from "../src/components/Dashboard/Sidebar";
import { Outlet, useLocation } from "react-router";
import {
  Cardholder,
  House,
  LightbulbFilament,
  User,
} from "@phosphor-icons/react";

const LayoutDashboard = () => {
  const location = useLocation();
  const menuItems = [
    { id: 1, label: "Dashboard", icon: House, path: "/dashboard" },
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
    { id: 4, label: "Akun Saya", icon: User, path: "/dashboard/myaccount" },
  ];
  return (
    <div className="flex max-h-full min-h-screen bg-slate-100">
      <Sidebar>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <SidebarItem
              key={item.id}
              text={item.label}
              icon={item.icon}
              link={item.path}
              active={isActive}
            />
          );
        })}
      </Sidebar>
      <div
        className={`flex flex-col flex-1 ml-[72px] md:ml-0 min-w-0 transition-all duration-300`}
      >
        <div>
          <header className="sticky top-0 z-100">
            <Header />
          </header>
          <main className="flex-1 overflow-y-auto pt-10 pb-3 px-3 md:py-4 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
