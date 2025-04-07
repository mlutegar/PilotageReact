import {useLocation} from "react-router-dom";
import Base from "./Base";
import Pdf from "../components/Teste/Pdf";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../components/Elementos/Textos/TextoCorrido/TextoCorrido";
import {Botaoseta} from "../components/Icones/Botaoseta";

import styled from "styled-components"

export const LeitorRelatorioStyle = styled.div`
    .conteudo{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-right: 2.69rem;
        
        @media (max-width: 768px){
            margin-right: 0;
            align-items: center;
            text-align: center !important;
        }
    }
    
    .titulo{
        text-align: left;
        padding: 0;
        
        @media (max-width: 768px){
            text-align: center !important;
        }
    }
`

const LeitorRelatorio = () => {
    // Use location to get the state that was passed during navigation
    const location = useLocation();

    // Get the PDF URL and title from the state, or use defaults if they're not available
    const pdfUrl = location.state?.pdfUrl || "https://pilotage.com.br/home/wp-content/uploads/2025/03/Relatorio-mensal-Fevereiro-2025.pdf";
    const title = location.state?.title || "Relatório";
    const mes = location.state?.mes || "Janeiro";
    const ano = location.state?.ano || "2025";

    return (
        <Base>
            <LeitorRelatorioStyle>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: "2.69rem",
                    marginBottom: "4.69rem"
                }}>
                    <div className={'conteudo'}>
                        <TituloPrimario className={'titulo'}>
                            <strong> {title} </strong>
                        </TituloPrimario>

                        <TextoCorrido>
                            Confira aqui o Relatório Mensal Pilotage do mês de {mes} de {ano} e veja nossas análises
                            sobre
                            economia internacional, economia brasileira e como estamos atuando neste período.
                            A Pilotage publica mensalmente este relatório no site.
                            Use a barra de controle para ampliar ou reduzir, virar páginas ou visualizar o relatório em
                            tela
                            cheia.
                        </TextoCorrido>


                        <Pdf
                            pdfUrl={pdfUrl}
                        />


                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderTop: "1px solid black",
                            paddingTop: "1rem"
                        }}>
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "none",
                                    background: "transparent"
                                }}>
                                <Botaoseta direction="left"/>
                                <span>Anterior</span>
                            </button>
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "none",
                                    background: "transparent"
                                }}>
                                <span>Avançar</span>
                                <Botaoseta direction="right"/>
                            </button>
                        </div>

                    </div>

                    <Sidebar/>
                </div>
            </LeitorRelatorioStyle>
        </Base>
    )
}

export default LeitorRelatorio;