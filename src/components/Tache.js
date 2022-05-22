import React from "react";

const Tache = ({ tache, declancheurTache, supprimerTache }) => {
  // enregistre l'état de la case cochée
  function handleTacheClic(e) {
    declancheurTache(tache.id);
  }

  // supprimer la tache correspondante
  function handleSupprimerTache(e) {
    supprimerTache(tache.id);
  }

  return (
    <li className="tache" draggable>
      <input
        type="checkbox"
        defaultChecked={tache.estCochee}
        onChange={handleTacheClic}
      ></input>
      <label>{tache.nom}</label>
      <input type="button" value="Modifier"></input>
      <input
        type="button"
        value="Supprimer"
        onClick={handleSupprimerTache}
      ></input>
    </li>
  );
};

export default Tache;
