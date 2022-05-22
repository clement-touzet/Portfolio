import React from "react";

const Tache = ({ tache, declancheurTache }) => {
  function handleTacheClic(e) {
    declancheurTache(tache.id);
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
      <input type="button" value="Supprimer"></input>
    </li>
  );
};

export default Tache;
