import React from "react";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
