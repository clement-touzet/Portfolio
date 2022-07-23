import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListeUtilisateur from "./pages/projets/application_cinema/ListeUtilisateur";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MesCompetences from "./pages/MesCompetences";
import MesProjets from "./pages/MesProjets";
import MonParcours from "./pages/MonParcours";
import ApplicationCinema from "./pages/projets/application_cinema/ApplicationCinema";
import ToDoList from "./pages/projets/ToDoList";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mes-projets" element={<MesProjets />} />
        <Route path="/mes-projets/to-do-list" element={<ToDoList />} />
        <Route
          path="/mes-projets/application-cinema/accueil"
          element={<ApplicationCinema />}
        />
        <Route
          path="/mes-projets/application-cinema/coup-de-coeur"
          element={<ListeUtilisateur />}
        />
        <Route path="/mon-parcours" element={<MonParcours />} />
        <Route path="/mes-competences" element={<MesCompetences />} />
        <Route path="/contact" element={<Contact />} />
        {/* todo charger une page erreur 404 plutot que Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
