/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Projet = (props) => {
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent: "center",
          "&:hover": { backgroundColor: "skyBlue" },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          className="projet"
          onClick={() => {
            document.location.href = props.lien;
          }}
        >
          <div className="contenuCarte">
            <h3 className="titreProjet">{props.titre} </h3>
            <p className="descriptionProjet"> {props.description}</p>
          </div>
        </Box>
        <FavoriteBorderIcon />
      </Paper>
    </Box>
  );
};

export default Projet;
