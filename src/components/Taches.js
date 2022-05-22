import React from "react";
import Tache from "./Tache";

const Taches = ({ taches, declancheurTache, supprimerTache }) => {
  return (
    <ul className="listeTaches">
      {taches.map((tache) => {
        return (
          <Tache
            key={tache.id}
            declancheurTache={declancheurTache}
            tache={tache}
            supprimerTache={supprimerTache}
          />
        );
      })}
    </ul>
  );
};

export default Taches;
