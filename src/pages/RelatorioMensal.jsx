import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";
import { useState, useEffect } from "react";

const RelatorioMensal = () => {
    const [relatorios, setRelatorios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Recupera os dados do localStorage
        const storedData = localStorage.getItem('relatorios');

        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setRelatorios(parsedData);
                console.log('Relatórios carregados:', parsedData);
            } catch (error) {
                console.error('Erro ao fazer parse dos dados:', error);
                setRelatorios([]);
            }
        } else {
            console.log('Nenhum relatório encontrado no localStorage.');
            setRelatorios([]);
        }

        setLoading(false);
    }, []);

    // Ordena os relatórios pela data (do mais recente para o mais antigo)
    const relatoriosOrdenados = relatorios.length > 0
        ? [...relatorios].sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
        : [];

    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between", marginTop: "2.69rem"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "3rem", marginRight: "2.69rem"}}>
                    <TituloPrimario style={{textAlign: "left"}}>
                        <strong>Relatórios Mensais</strong>
                    </TituloPrimario>

                    {loading ? (
                        <div>Carregando relatórios...</div>
                    ) : relatoriosOrdenados.length > 0 ? (
                        <div style={{display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem"}}>
                            {relatoriosOrdenados.map((relatorio, index) => {
                                return (
                                    <CardRelatorio
                                        key={index}
                                        imagem={relatorio.imagem || relatorio.featured_image}
                                        titulo={relatorio.post_title}
                                        descricao={"                        Confira aqui o Relatório Mensal Pilotage do mês de [MES] de [ANO] e veja nossas análises sobre\n" +
                                            "                        economia internacional, economia brasileira e como estamos atuando neste período.\n" +
                                            "                        A Pilotage publica mensalmente este relatório no site.\n" +
                                            "                        Use a barra de controle para ampliar ou reduzir, virar páginas ou visualizar o relatório em tela\n" +
                                            "                        cheia."}
                                        link={relatorio.guid}
                                    />
                                )
                            })}
                        </div>
                    ) : (
                        <div>Nenhum relatório encontrado</div>
                    )}
                </div>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default RelatorioMensal