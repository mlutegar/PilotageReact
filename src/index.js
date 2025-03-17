
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Fotos from "./pages/Fotos";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Atletas from "./pages/Atletas";
import CanalDeDenuncias from "./pages/CanalDeDenuncias";
import DocumentosRegulatorios from "./pages/DocumentosRegulatorios";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import RelatorioMensal from "./pages/RelatorioMensal";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/canal-de-denuncias" element={<CanalDeDenuncias/>} />
        <Route path="/documentos-regulatorios" element={<DocumentosRegulatorios/>} />
        <Route path="/politicas-de-privacidad" element={<PoliticaDePrivacidade/>} />
        <Route path="/relatorio-mensal" element={<RelatorioMensal/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
