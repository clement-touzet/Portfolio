
import React from "react";
import Projet from "./Projet";
import Grid2 from '@mui/material/Unstable_Grid2';

const Projets = () => {
  // chaque élément de projets représente un projet
  // [ {titre:titre,description:description,lien:lien}, ... ]
  const projets = [
    {
      titre: "Rien pour l'instant",
      description: "Voidd",
      lien: "",
    },
    {
      titre: "Application de cinéma",
      description: "Liste des films disponible au cinéma actuellement",
      lien: "/mes-projets/application-cinema/accueil",
    },
  ];

  return (
    <Grid2 container className="projets" spacing={1} sx={{width:"100%",display: "flex",
   
    alignItems:"center",
    justifyContent:"space-around"}} >
      {projets.map((projet, index) => (
        <Grid2 item key={index} md={5.5} xs={8}>
          <Projet {...projet} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Projets;
