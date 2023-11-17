// Layout.js
import React from "react";
import Navbar from "./DNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
