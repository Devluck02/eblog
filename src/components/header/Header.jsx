import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
const Header = () => {
  return (
    <header>
      <div className="container py-2">
        <div className="flex flex-y-center flex-x-between">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
