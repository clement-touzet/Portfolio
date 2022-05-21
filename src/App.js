import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MesCompetences from "./pages/MesCompetences";
import MesProjets from "./pages/MesProjets";
import MonParcours from "./pages/MonParcours";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mes-projets" element={<MesProjets />} />
        <Route path="/mon-parcours" element={<MonParcours />} />
        <Route path="/mes-competences" element={<MesCompetences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
