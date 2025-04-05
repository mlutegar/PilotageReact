import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";
import { useState, useEffect } from "react";
import BotaoPrimario from "../components/Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";

const RelatorioMensal = () => {
    const [relatorios, setRelatorios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [relatoriosExibidos, setRelatoriosExibidos] = useState(10);
    const [inputValue, setInputValue] = useState("");  // Adicione isso para o estado de pesquisa



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

    const relatoriosFiltrados = relatoriosOrdenados.filter((relatorio) =>
        relatorio.post_title.toLowerCase().includes(inputValue.toLowerCase())
    );

    const relatoriosParaExibir = relatoriosFiltrados.slice(0, relatoriosExibidos);


    const getMesEAno = (titulo) => {
        const regex = /Relatório mensal (\w+) (\d{4})/;
        const match = titulo.match(regex);
        if (match) {
            return { mes: match[1], ano: match[2] };
        }
        return { mes: "", ano: "" };  // Retorna valores em branco se não encontrar o padrão
    };

    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between", marginTop: "2.69rem", marginBottom: "4.69rem"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "3rem", marginRight: "2.69rem"}}>
                    <TituloPrimario style={{textAlign: "left"}}>
                        <strong>Relatórios Mensais</strong>
                    </TituloPrimario>

                    {loading ? (
                        <div>Carregando relatórios...</div>
                    ) : relatoriosOrdenados.length > 0 ? (
                        <div style={{display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem"}}>
                            {relatoriosParaExibir.map((relatorio, index) => {
                                const { mes, ano } = getMesEAno(relatorio.post_title);
                                return (
                                    <CardRelatorio
                                        key={index}
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
                        <div>Nenhum relatório encontrado</div>
                    )}

                    {relatoriosExibidos < relatoriosOrdenados.length && (
                        <BotaoSecundario onClick={() => setRelatoriosExibidos(relatoriosExibidos + 10)}>
                            Mostrar Mais
                        </BotaoSecundario>
                    )}

                </div>

                <Sidebar
                    setInputValue={setInputValue} // Passa a função para o Sidebar
                    relatoriosRecentes={relatoriosOrdenados.slice(0, 4)} // Passa os 4 últimos relatórios
                />

            </div>
        </Base>
    )
}

export default RelatorioMensal