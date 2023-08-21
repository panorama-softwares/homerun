import React, { PropsWithChildren } from "react";
import Navbar from "../Header/index";
import Footer from "../Footer/index";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer></Footer>
    </>
  );
};
export default Layout;
