import React, { useState } from "react";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <div className="w-[260px] min-w-[260px]">
        <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      </div>
      <div
        className={`flex flex-col flex-1 min-w-0 transition-all duration-300 ${
          isOpen ? "ml-0" : "-ml-[180px]"
        }`}
      >
        <header className="sticky top-0 z-100">
          <Header />
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
