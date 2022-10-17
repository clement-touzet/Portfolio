import { Box, Typography } from "@mui/material";
import React from "react";
import Projets from "../components/projets/Projets";

const MesProjets = () => {
  return (
    <Box sx={{width:"100%",display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",}}>
      <Typography variant={"h2"}>Mes projets</Typography>
      <Projets />
    </Box>
  );
};

export default MesProjets;
