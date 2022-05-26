import React from "react";
import Tache from "./Tache";

const Taches = ({
  taches,
  declancheurTache,
  supprimerTache,
  modifierTache,
}) => {
  return (
    <div className="listeTaches">
      <ul className="listeTachesUl">
        {taches.length === 0 ? <p>Aucune tâches en cours.</p> : false}
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
    </div>
  );
};

export default Taches;
