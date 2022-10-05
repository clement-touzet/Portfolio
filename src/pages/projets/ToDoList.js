// import React, { useState, useRef, useEffect } from "react";
// import Taches from "../../components/projets/toDoList/Taches";
// import { v4 as uuidv4 } from "uuid";

// const LOCAL_STORAGE_KEY = "ToDoList.taches";

// const ToDoList = () => {
//   // Application de To Do Liste (liste de tâches à faire).

//   const [taches, setTaches] = useState([]);
//   const tacheInputRef = useRef();

//   // stockage des données (ici des taches) en local
//   // restitution des données
//   useEffect(() => {
//     const tachesEnregistrees = JSON.parse(
//       localStorage.getItem(LOCAL_STORAGE_KEY)
//     );
//     if (tachesEnregistrees) setTaches(tachesEnregistrees);
//   }, []);
//   //sauvegarde des données
//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taches));
//   }, [taches]);

//   function declancheurTache(id) {
//     // enregistre l'état de la checkbox de la tache ayant pour id "id"
//     const nouvellesTaches = [...taches];
//     const tache = nouvellesTaches.find((tache) => tache.id === id);
//     tache.estCochee = !tache.estCochee;
//     setTaches(nouvellesTaches);
//   }

//   function modifierTache(id) {
//     // modifie la tache ayant pour id "id" avec la valeur dans le input
//     const nouvellesTaches = [...taches];
//     const tache = nouvellesTaches.find((tache) => tache.id === id);
//     tache.nom = tacheInputRef.current.value;
//     tacheInputRef.current.value = null;
//     setTaches(nouvellesTaches);
//   }

//   function supprimerTache(id) {
//     // supprime la tache ayant pour id "id"
//     const nouvellesTaches = [...taches];
//     const tachesSansCelleSupprimee = nouvellesTaches.filter(
//       (tache) => tache.id !== id
//     );
//     setTaches(tachesSansCelleSupprimee);
//   }

//   // ajouter une nouvelle tache à la liste des taches
//   function handleAjouterNouvelleTache() {
//     const name = tacheInputRef.current.value;
//     if (name === "") return;
//     setTaches((prevTaches) => {
//       return [...prevTaches, { id: uuidv4(), nom: name, estCochee: false }];
//     });
//     tacheInputRef.current.value = null;
//   }

//   // réinitialiser(supprime) les tâches de la liste
//   function handleReinitialiserTaches() {
//     setTaches([]);
//   }

//   function enterKeyPressed(e) {
//     if (e.key === "Enter") {
//       handleAjouterNouvelleTache(e);
//     }
//   }

//   return (
//     <div className="toDoList">
//       <div className="menu">
//         <a href="/mes-projets">RETOUR</a>
//       </div>
//       {/* corps de l'application */}
//       <div className="application">
//         <input
//           ref={tacheInputRef}
//           type="text"
//           placeholder="Tâche"
//           onKeyUp={enterKeyPressed}
//         ></input>
//         <input
//           type="button"
//           value="Ajouter"
//           onClick={handleAjouterNouvelleTache}
//         ></input>

//         <input
//           type="button"
//           value="Réinitialiser la liste"
//           onClick={handleReinitialiserTaches}
//         ></input>
//       </div>
//       {/* liste des taches actuelles */}
//       <Taches
//         taches={taches}
//         declancheurTache={declancheurTache}
//         supprimerTache={supprimerTache}
//         modifierTache={modifierTache}
//       />
//     </div>
//   );
// };

// export default ToDoList;
