import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" style={{ textDecoration: "none" }} draggable={false}>
        <h1>Clément Touzet</h1>
      </NavLink>
    </div>
  );
};

export default Header;
