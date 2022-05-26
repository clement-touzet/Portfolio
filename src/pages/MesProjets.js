import React from "react";
import Navigation from "../components/Navigation";
import Projets from "../components/projets/Projets";

const MesProjets = () => {
  return (
    <div>
      <Navigation />
      <h1 className="titrePageProjets">Mes projets</h1>
      <Projets />
    </div>
  );
};

export default MesProjets;
