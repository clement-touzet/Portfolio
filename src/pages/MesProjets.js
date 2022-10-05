import { Box } from "@mui/material";
import React from "react";
import Projets from "../components/projets/Projets";

const MesProjets = () => {
  return (
    <Box sx={{width:"100%",display: "flex",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"space-around"}}>
      <h1 className="titrePageProjets">Mes projets</h1>
      <Projets />
    </Box>
  );
};

export default MesProjets;
