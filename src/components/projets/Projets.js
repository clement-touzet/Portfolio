import React from "react";
import Projet from "./Projet";

const Projets = () => {
  // chaque élément de projets représente un projet
  // [ {titre:titre,description:description,lien:lien}, ... ]
  const projets = [
    {
      titre: "To do list",
      description: "Application pour lister des tâches",
      lien: "/mes-projets/to-do-list",
    },
    {
      titre: "Application de cinéma",
      description: "Liste des films disponible au cinéma actuellement",
      lien: "/mes-projets/application-cinema/accueil",
    },
  ];

  return (
    <div className="projets">
      {projets.map((projet, index) => (
        <Projet key={index} {...projet} />
      ))}
    </div>
  );
};

export default Projets;
