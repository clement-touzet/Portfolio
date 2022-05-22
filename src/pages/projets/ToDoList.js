import React, { useState, useRef, useEffect } from "react";
import Taches from "../../components/Taches";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "ToDoList.taches";

const ToDoList = () => {
  const [taches, setTaches] = useState([]);
  const tacheInputRef = useRef();

  // stockage des données (ici des taches) en local
  // restitution des données
  useEffect(() => {
    const tachesEnregistrees = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (tachesEnregistrees) setTaches(tachesEnregistrees);
  }, []);
  //sauvegarde des données
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taches));
  }, [taches]);

  function declancheurTache(id) {
    // enregistre l'état de la checkbox de la tache ayant pour id "id"
    const nouvelleTaches = [...taches];
    const tache = nouvelleTaches.find((tache) => tache.id === id);
    tache.estCochee = !tache.estCochee;
    setTaches(nouvelleTaches);
  }

  // ajouter une nouvelle tache à la liste des taches
  function handleAjouterNouvelleTache(e) {
    const name = tacheInputRef.current.value;
    if (name === "") return;
    setTaches((prevTaches) => {
      return [...prevTaches, { id: uuidv4(), nom: name, estCochee: false }];
    });
    tacheInputRef.current.value = null;
  }

  // réinitialiser(supprime) les tâches de la liste
  function handleReinitialiserTaches(e) {
    setTaches([]);
  }

  return (
    <div>
      <a href="/mes-projets">RETOUR</a>
      <h2>Application de to do list en cours de développement...</h2>
      {/* corps de l'application */}
      <div>
        <input ref={tacheInputRef} type="text" placeholder="Tâche"></input>
        <input
          type="button"
          value="Ajouter"
          onClick={handleAjouterNouvelleTache}
        ></input>
      </div>
      <input
        type="button"
        value="Réinitialiser la liste"
        onClick={handleReinitialiserTaches}
      ></input>
      {/* liste des taches actuelles */}
      <Taches taches={taches} declancheurTache={declancheurTache} />
    </div>
  );
};

export default ToDoList;
