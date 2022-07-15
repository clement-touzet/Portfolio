import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/mes-projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          draggable={false}
        >
          <li>Mes projets</li>
        </NavLink>
        <NavLink
          to="/mon-parcours"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          draggable={false}
        >
          <li>Mon parcours</li>
        </NavLink>
        <NavLink
          to="/mes-competences"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          draggable={false}
        >
          <li>Mes compétences</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          draggable={false}
        >
          <li>Me Contacter</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
