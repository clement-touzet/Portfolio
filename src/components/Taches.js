import React from "react";
import Tache from "./Tache";

const Taches = ({
  taches,
  declancheurTache,
  supprimerTache,
  modifierTache,
}) => {
  return (
    <ul className="listeTaches">
      {taches.map((tache) => {
        return (
          <Tache
            key={tache.id}
            tache={tache}
            declancheurTache={declancheurTache}
            supprimerTache={supprimerTache}
            modifierTache={modifierTache}
          />
        );
      })}
    </ul>
  );
};

export default Taches;
