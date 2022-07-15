import React from "react";
import { NavLink } from "react-router-dom";

const HeaderCinema = () => {
  return (
    <div className="headerCinema">
      <div className="menu">
        <a href="/mes-projets">RETOUR</a>
      </div>
      <nav>
        <ul>
          <NavLink
            to="/mes-projets/application-cinema/accueil"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/mes-projets/application-cinema/coup-de-coeur"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Coup de coeur</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderCinema;
