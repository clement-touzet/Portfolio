import { Box, Typography } from "@mui/material";
import React from "react";
import { Chrono } from "react-chrono";

const MonParcours = () => {
  const dataMonParcours = [
    {
      title: "Septembre 2022 - Septembre 2023",
      cardTitle: "Licence Professionnelle Programmation Avancée",
      cardSubtitle: "IUT de Bayonne et du Pays Basque - Anglet",
      cardDetailedText:
        "Licence pro réalisée en alternance avec chez l'entreprise Kasual Business",
    },
    {
      title: "11 avril - 17 juin 2022",
      cardTitle: "Stage",
      cardSubtitle: "Mecadaq - Tarnos",
      cardDetailedText:
        "J'ai effectué mon stage de fin d'année de semestre 4 de DUT chez Mecadaq. J'ai pu automatiser la production d'étiquettes autocollantes, qui sont utilisées sur des blocs de matières dans les différents sites de l'entreprise.",
    },
    {
      title: "2020 - 2022",
      cardTitle: "DUT Informatique",
      cardSubtitle: "IUT de Bayonne et du Pays Basque - Anglet",
      cardDetailedText: "",
    },
    {
      title: "2017 - 2020",
      cardTitle:
        "Bac S option informatique (ISN - Informatique et Science du Numérique)",
      cardSubtitle: "Lycée René Cassin - Bayonne",
      cardDetailedText:
        "Avec l'option ISN de terminale, j'ai réalisé un jeu en python pour le projet de fin d'année.",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        
      }}
    >
      <Typography
        variant="h2"
        onClick={() => console.log(JSON.stringify(dataMonParcours))}
      >
        Mon parcours
      </Typography>
      <Box sx={{height:"600px",width: "100%"}}>
      <Chrono
        allowDynamicUpdate={true}
        items={dataMonParcours}
        mode="VERTICAL"
        scrollable 
      />
      </Box>
    </Box>
  );
};

export default MonParcours;
