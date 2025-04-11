import React, { useRef, useEffect } from "react";
import Base from "./Base";
import Banner from "../components/Secoes/Banner/Banner";
import SobreNos from "../components/Secoes/SobreNos/SobreNos";
import NossosValores from "../components/Secoes/NossosValores/NossosValores";
import GestaoRecursos from "../components/Secoes/GestaoRecursos/GestaoRecursos";
import ComoInvestir from "../components/Secoes/ComoInvestir/ComoInvestir";
import NossaEquipe from "../components/Secoes/NossaEquipe/NossaEquipe";
import RelatorioMensalSecao from "../components/Secoes/RelatorioMensalSecao/RelatorioMensalSecao";
import Contato from "../components/Secoes/Contato/Contato";
import {useLocation} from "react-router-dom";

// Criando um contexto para compartilhar as refs com outros componentes
export const SecoesContext = React.createContext({});

const Home = () => {
    const location = useLocation();

    const sobreNosRef = useRef(null);
    const gestaoRecursosRef = useRef(null);
    const comoInvestirRef = useRef(null);
    const nossaEquipeRef = useRef(null);
    const relatorioRef = useRef(null);
    const contatoRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        const refs = {
            sobreNos: sobreNosRef,
            gestaoRecursos: gestaoRecursosRef,
            comoInvestir: comoInvestirRef,
            nossaEquipe: nossaEquipeRef,
            relatorio: relatorioRef,
            contato: contatoRef
        };

        const ref = refs[section];

        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <SecoesContext.Provider value={{ sobreNosRef, contatoRef }}>
            <Base>
                <Banner />
                <div ref={sobreNosRef}>
                    <SobreNos />
                    <NossosValores />
                </div>
                <div ref={gestaoRecursosRef}>
                    <GestaoRecursos />
                </div>
                <div ref={comoInvestirRef}>
                    <ComoInvestir />
                </div>
                <div ref={nossaEquipeRef}>
                    <NossaEquipe />
                </div>
                <div ref={relatorioRef}>
                    <RelatorioMensalSecao />
                </div>
                <div ref={contatoRef}>
                    <Contato />
                </div>
            </Base>
        </SecoesContext.Provider>
    );
};

export default Home;
