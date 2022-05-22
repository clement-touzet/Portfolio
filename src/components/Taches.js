import React from "react";
import Tache from "./Tache";

const Taches = ({ taches, declancheurTache }) => {
  return (
    <ul className="listeTaches">
      {taches.map((tache) => {
        return (
          <Tache
            key={tache.id}
            declancheurTache={declancheurTache}
            tache={tache}
          />
        );
      })}
    </ul>
  );
};

export default Taches;
