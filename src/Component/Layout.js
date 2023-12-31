import React from "react";
import NavBar from "./NavBar";

export const Layout = ({ children }) => {
    return (
      <div>
        <NavBar />
        <div className="content">{children}</div>
      </div>
    );
  };
  
  export default Layout;