import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";
import {useState, useEffect} from "react";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";


import styled from "styled-components"

export const RelatorioMensalStyle = styled.div`
    .conteudo {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-right: 2.69rem;

        @media (max-width: 768px) {
            margin-right: 0;
            align-items: center;
        }
    }
`

const RelatorioMensal = () => {
    const [relatorios, setRelatorios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [relatoriosExibidos, setRelatoriosExibidos] = useState(10);
    const [inputValue, setInputValue] = useState("");  // Adicione isso para o estado de pesquisa
    const [selectedAno, setSelectedAno] = useState(""); // Adicione isso para o estado do ano selecionado
    const [selectedMes, setSelectedMes] = useState("");

    useEffect(() => {
        // Recupera os dados do localStorage
        const storedData = localStorage.getItem('relatorios');

        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setRelatorios(parsedData);
            } catch (error) {
                console.error('Erro ao fazer parse dos dados:', error);
                setRelatorios([]);
            }
        } else {
            setRelatorios([]);
        }

        setLoading(false);
    }, []);

    // Ordena os relatórios pela data (do mais recente para o mais antigo)
    const relatoriosOrdenados = relatorios.length > 0
        ? [...relatorios].sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
        : [];

    const getMesEAno = (titulo) => {
        const regex = /Relatório mensal (\w+) (\d{4})/;
        const match = titulo.match(regex);
        if (match) {
            return {mes: match[1], ano: match[2]};
        }
        return {mes: "", ano: ""};  // Retorna valores em branco se não encontrar o padrão
    };

    const relatoriosFiltrados = relatoriosOrdenados.filter((relatorio) => {
        const {mes, ano} = getMesEAno(relatorio.post_title);
        const matchesTexto = relatorio.post_title.toLowerCase().includes(inputValue.toLowerCase());
        const matchesAno = selectedAno === "" || ano === selectedAno;
        const matchesMes = selectedMes === "" || mes === selectedMes;

        return matchesTexto && matchesAno && matchesMes;
    });

    const relatoriosParaExibir = relatoriosFiltrados.slice(0, relatoriosExibidos);

    return (
        <Base>
            <RelatorioMensalStyle>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: "2.69rem",
                    marginBottom: "4.69rem"
                }}>
                    <div className={'conteudo'}>
                        <TituloPrimario style={{textAlign: "left"}}>
                            <strong>Relatórios Mensais</strong>
                        </TituloPrimario>

                        {loading ? (
                            <div>Carregando relatórios...</div>
                        ) : relatoriosFiltrados.length > 0 ? (
                            <div style={{display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem"}}>
                                {relatoriosParaExibir.map((relatorio, index) => {
                                    const {mes, ano} = getMesEAno(relatorio.post_title);
                                    return (
                                        <CardRelatorio
                                            key={index}
                                            index={index}
                                            imagem={relatorio.imagem || relatorio.featured_image}
                                            titulo={relatorio.post_title}
                                            descricao={`Confira aqui o Relatório Mensal Pilotage do mês de ${mes} de ${ano} e veja nossas análises sobre\n` +
                                                "economia internacional, economia brasileira e como estamos atuando neste período.\n" +
                                                "A Pilotage publica mensalmente este relatório no site.\n" +
                                                "Use a barra de controle para ampliar ou reduzir, virar páginas ou visualizar o relatório em tela\n" +
                                                "cheia."}
                                            link={relatorio.guid}
                                            mes={mes}
                                            ano={ano}
                                        />
                                    )
                                })}
                            </div>
                        ) : (
                            <div style={{padding: "2rem", textAlign: "center"}}>
                                Nenhum relatório encontrado com os filtros selecionados.
                            </div>
                        )}

                        {relatoriosFiltrados.length > 0 && relatoriosExibidos < relatoriosFiltrados.length && (
                            <BotaoSecundario onClick={() => setRelatoriosExibidos(relatoriosExibidos + 10)}>
                                Mostrar Mais
                            </BotaoSecundario>
                        )}

                    </div>

                    <Sidebar
                        setInputValue={setInputValue}
                        setSelectedAno={setSelectedAno}
                        setSelectedMes={setSelectedMes}
                        relatoriosRecentes={relatoriosOrdenados.slice(0, 4)}
                    />
                </div>
            </RelatorioMensalStyle>
        </Base>
    )
}

export default RelatorioMensal