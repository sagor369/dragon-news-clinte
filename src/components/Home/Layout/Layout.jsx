import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Layout;
