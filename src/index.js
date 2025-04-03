import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import CanalDeDenuncias from "./pages/CanalDeDenuncias";
import DocumentosRegulatorios from "./pages/DocumentosRegulatorios";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import RelatorioMensal from "./pages/RelatorioMensal";
import LeitorRelatorio from "./pages/LeitorRelatorio";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/canal-de-denuncias" element={<CanalDeDenuncias/>}/>
                <Route path="/documentos-regulatorios" element={<DocumentosRegulatorios/>}/>
                <Route path="/politicas-de-privacidade" element={<PoliticaDePrivacidade/>}/>
                <Route path="/relatorio-mensal" element={<RelatorioMensal/>}/>

                {/* Fixed the typo in the path from "/leito-relatorio" to "/leitor-relatorio" */}
                <Route path="/leitor-relatorio" element={<LeitorRelatorio/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);