import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import HomeNavbar from "../HomeNavbar";
import Navbar from "../Navbar";

const Layout = () => {
    const location = useLocation();
    console.log(location);
    const homeRoutes = ["/"];
    const isHomeRoute = homeRoutes.some((route) =>
    location.pathname.toLowerCase() === route.toLowerCase()
  );
    console.log(isHomeRoute);
  return (
    <>
      {isHomeRoute ? <HomeNavbar /> : <Navbar />}
      <Outlet />
      {isHomeRoute ? null : <Footer />}
    </>
  );
};

export default Layout;
