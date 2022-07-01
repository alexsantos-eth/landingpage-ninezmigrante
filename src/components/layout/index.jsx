// REACT
import React from "react";

// COMPONENTS
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Popup from "./components/popup";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Popup />
    </>
  );
};

export default Layout;
