import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListeUtilisateur from "./pages/projets/application_cinema/ListeUtilisateur";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MesCompetences from "./pages/MesCompetences";
import MesProjets from "./pages/MesProjets";
import MonParcours from "./pages/MonParcours";
import ApplicationCinema from "./pages/projets/application_cinema/ApplicationCinema";

import "./App.css";
import Navigation from "./layouts/navbar/Navigation";
import { Box, Stack } from "@mui/material";
const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mes-projets" element={<MesProjets />} />
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
        </Stack>
      </Box>
    </BrowserRouter>
  );
};

export default App;
