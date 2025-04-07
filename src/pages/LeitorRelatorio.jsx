import {useLocation, useNavigate} from "react-router-dom";
import Base from "./Base";
import Pdf from "../components/Teste/Pdf";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../components/Elementos/Textos/TextoCorrido/TextoCorrido";
import {Botaoseta} from "../components/Icones/Botaoseta";

import styled from "styled-components"

export const LeitorRelatorioStyle = styled.div`
    .conteudo {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-right: 2.69rem;

        @media (max-width: 768px) {
            margin-right: 0;
            align-items: center;
            text-align: center !important;
        }
    }

    .titulo {
        text-align: left;
        padding: 0;

        @media (max-width: 768px) {
            text-align: center !important;
        }
    }
`

const LeitorRelatorio = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pdfUrl = location.state?.pdfUrl || "https://pilotage.com.br/home/wp-content/uploads/2025/03/Relatorio-mensal-Fevereiro-2025.pdf";
    const title = location.state?.title || "Relatório";
    const mes = location.state?.mes || "Janeiro";
    const ano = location.state?.ano || "2025";
    const currentIndex = location.state?.currentIndex || 0;

    const storedData = localStorage.getItem('relatorios');
    const relatorios = storedData ? JSON.parse(storedData) : [];
    const relatoriosOrdenados = relatorios.sort((a, b) => new Date(b.post_date) - new Date(a.post_date));

    const handleAnterior = () => {
        if (currentIndex < relatoriosOrdenados.length - 1) {
            const newIndex = currentIndex + 1;
            const novoRelatorio = relatoriosOrdenados[newIndex];

            window.scrollTo(0, 0);

            navigate('/leitor-relatorio', {
                state: {
                    pdfUrl: novoRelatorio.guid,
                    title: novoRelatorio.post_title,
                    currentIndex: newIndex,
                }
            });
        }
    };

    const handleAvancar = () => {
        if (currentIndex > 0) {  // existe um relatório "avançado" (mais recente)
            const newIndex = currentIndex - 1;
            const novoRelatorio = relatoriosOrdenados[newIndex];

            window.scrollTo(0, 0);

            navigate('/leitor-relatorio', {
                state: {
                    pdfUrl: novoRelatorio.guid,
                    title: novoRelatorio.post_title,
                    currentIndex: newIndex,
                    // opcional: se precisar, extraia mes/ano via função getMesEAno
                }
            });
        }
    };

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
                                }}
                                onClick={handleAnterior}
                            >
                                <Botaoseta direction="left"/>
                                <span>Anterior</span>
                            </button>
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "none",
                                    background: "transparent"
                                }}
                                onClick={handleAvancar}
                            >
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