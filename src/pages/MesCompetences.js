import { Box, Typography } from "@mui/material";
import React from "react";
import Competences from "../components/competences/Competences";

const MesCompetences = () => {
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h2">Mes compétences</Typography>
      <Competences />
    </Box>
  );
};

export default MesCompetences;
