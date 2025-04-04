import React, { useRef } from "react";
import Base from "./Base";
import Banner from "../components/Secoes/Banner/Banner";
import SobreNos from "../components/Secoes/SobreNos/SobreNos";
import NossosValores from "../components/Secoes/NossosValores/NossosValores";
import GestaoRecursos from "../components/Secoes/GestaoRecursos/GestaoRecursos";
import ComoInvestir from "../components/Secoes/ComoInvestir/ComoInvestir";
import NossaEquipe from "../components/Secoes/NossaEquipe/NossaEquipe";
import RelatorioMensalSecao from "../components/Secoes/RelatorioMensalSecao/RelatorioMensalSecao";
import Contato from "../components/Secoes/Contato/Contato";

// Criando um contexto para compartilhar as refs com outros componentes
export const SecoesContext = React.createContext({});

const Home = () => {
    // Criando as refs para cada seção que desejamos referenciar
    const sobreNosRef = useRef(null);
    const gestaoRecursosRef = useRef(null);
    const comoInvestirRef = useRef(null);
    const nossaEquipeRef = useRef(null);
    const relatorioRef = useRef(null);
    const contatoRef = useRef(null);

    // Objeto com todas as refs para compartilhar via contexto
    const secoes = {
        sobreNosRef,
        gestaoRecursosRef,
        comoInvestirRef,
        nossaEquipeRef,
        relatorioRef,
        contatoRef
    };

    return (
        <SecoesContext.Provider value={secoes}>
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