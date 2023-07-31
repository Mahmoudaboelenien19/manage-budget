import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <nav>
      <ReactSVG src={Logo} />
    </nav>
  );
};

export default Nav;
