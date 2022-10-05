import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  backgroundColor:"darkcyan"
});
const StyledNavLink = styled(NavLink)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  textDecoration: "none",
  width: "170px",
  height: "35px",
  overflow: "hidden",
  color: "darkcyan",
  "&:hover": { backgroundColor: "skyblue" },
});

const Navigation = () => {
  return (
    <div className="navigation">
      <AppBar position="sticky" sx={{ display: "flex" }}>
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Clément Touzet
          </Typography>
          <StyledNavLink
            to="/mes-projets"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            draggable={false}
          >
            <Typography>Projets</Typography>
          </StyledNavLink>
          <StyledNavLink
            to="/mon-parcours"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            draggable={false}
          >
            <Typography>Parcours</Typography>
          </StyledNavLink>
          <StyledNavLink
            to="/mes-competences"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            draggable={false}
          >
            <Typography>Compétences</Typography>
          </StyledNavLink>
          <StyledNavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            draggable={false}
          >
            <Typography>Contact</Typography>
          </StyledNavLink>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
