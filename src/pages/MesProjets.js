import React from "react";
import Navigation from "../components/Navigation";
import Projet from "../components/Projet";

const MesProjets = () => {
  return (
    <div>
      <Navigation />
      <h1>Mes projets</h1>
      <Projet />
      <Projet />
      <Projet />
      <Projet />
    </div>
  );
};

export default MesProjets;
