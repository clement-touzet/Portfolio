import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/mes-projets">
          <li>Mes projets</li>
        </NavLink>
        <NavLink to="/mon-parcours">
          <li>Mon parcours</li>
        </NavLink>
        <NavLink to="/mes-competences">
          <li>Mes compétences</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Me Contacter</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
