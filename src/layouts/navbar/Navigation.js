import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
})
const StyledNavLink = styled(NavLink)({
  color:"red"
})

const Navigation = () => {
  return (
    <div className="navigation">
      {/* <ul>
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
      </ul> */}
      <AppBar position="sticky">
        <StyledToolbar><Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Clément Touzet</Typography></StyledToolbar>
        <StyledNavLink
          to="/mes-projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          draggable={false}
        >Mes projets</StyledNavLink>
      </AppBar>
    </div>
  );
};

export default Navigation;
