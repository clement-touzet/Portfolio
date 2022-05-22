import React from "react";

const ToDoList = () => {
  return (
    <div>
      <a href="/mes-projets">RETOUR</a>
      <h2>Application de to do list en cours de développement...</h2>
      <div>
        <input type="text" placeholder="Tâche"></input>

        <input type="button" value="Ajouter"></input>
      </div>
      <input type="button" value="Réinitialiser la liste"></input>
      <ul className="listeTaches">
        <li className="tache" draggable>
          <input type="checkbox"></input>
          <label>Tache 1</label>
          <input type="button" value="Modifier"></input>
          <input type="button" value="Supprimer"></input>
        </li>
        <li className="tache" draggable>
          <input type="checkbox"></input>
          <label>Tache 2</label>
          <input type="button" value="Modifier"></input>
          <input type="button" value="Supprimer"></input>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
