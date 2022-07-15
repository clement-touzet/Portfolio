import React from "react";

const Tache = ({ tache, declancheurTache, supprimerTache, modifierTache }) => {
  // enregistre l'état de la case cochée
  function handleTacheClic(e) {
    declancheurTache(tache.id);
  }

  // supprimer la tache correspondante
  function handleSupprimerTache(e) {
    supprimerTache(tache.id);
  }

  function handleModifierTache(e) {
    modifierTache(tache.id);
  }

  return (
    <li className="tache">
      <input
        type="checkbox"
        defaultChecked={tache.estCochee}
        onChange={handleTacheClic}
      ></input>
      <label>{tache.nom}</label>
      <div className="boutons">
        <input
          type="button"
          value="Modifier"
          onClick={handleModifierTache}
        ></input>
        <input
          type="button"
          value="Supprimer"
          onClick={handleSupprimerTache}
        ></input>
      </div>
    </li>
  );
};

export default Tache;
