import React from "react";
import Projets from "../components/projets/Projets";
import Navigation from "../layouts/navbar/Navigation";

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
