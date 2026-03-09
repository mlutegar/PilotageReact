import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";
import {useState, useEffect} from "react";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import {extractFirstPageAsImage} from "../utils/pdfUtils";


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
    
    .relatorio {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 2.69rem;
        margin-bottom: 4.69rem;
        
        @media (max-width: 768px) {
            .titulo{
                padding-bottom: 0.5rem;
            }
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
    const [coverCache, setCoverCache] = useState({}); // Cache de capas dos PDFs
    const [loadingCovers, setLoadingCovers] = useState(false);

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

    // Carrega as capas dos PDFs quando os relatórios forem carregados
    useEffect(() => {
        const loadCovers = async () => {
            if (relatorios.length === 0) return;

            console.log('Iniciando carregamento de capas dos relatórios...');

            // Verifica se já temos capas em cache no localStorage
            const cachedCovers = localStorage.getItem('relatoriosCovers');
            if (cachedCovers) {
                try {
                    const parsedCache = JSON.parse(cachedCovers);
                    console.log('Capas carregadas do cache:', Object.keys(parsedCache).length);
                    setCoverCache(parsedCache);
                    return;
                } catch (error) {
                    console.error('Erro ao carregar capas do cache:', error);
                }
            }

            // Se não tem cache, carrega as capas
            console.log('Cache não encontrado, carregando capas dos PDFs...');
            setLoadingCovers(true);
            const newCovers = {};

            // Ordena por data e pega os mais recentes
            const relatoriosOrdenados = [...relatorios].sort((a, b) =>
                new Date(b.post_date) - new Date(a.post_date)
            );

            // Carrega apenas os primeiros 10 relatórios mais recentes
            const relatoriosToLoad = relatoriosOrdenados.slice(0, 10);
            console.log('Carregando capas de', relatoriosToLoad.length, 'relatórios');

            for (const relatorio of relatoriosToLoad) {
                try {
                    const urlParts = relatorio.guid.split("/");
                    const domain = "api.pilotage.com.br";
                    const path = urlParts.slice(3).join("/");
                    const formattedUrl = `https://${domain}/${path}`;

                    console.log('Extraindo capa de:', relatorio.post_title);
                    const coverImage = await extractFirstPageAsImage(formattedUrl, 1.5);
                    newCovers[relatorio.guid] = coverImage;
                    console.log('Capa extraída com sucesso:', relatorio.post_title);
                } catch (error) {
                    console.error(`Erro ao carregar capa do relatório ${relatorio.post_title}:`, error);
                }
            }

            console.log('Total de capas carregadas:', Object.keys(newCovers).length);
            setCoverCache(newCovers);
            // Salva no localStorage para usar depois
            localStorage.setItem('relatoriosCovers', JSON.stringify(newCovers));
            setLoadingCovers(false);
        };

        loadCovers();
    }, [relatorios]);

    // Ordena os relatórios pela data (do mais recente para o mais antigo)
    const relatoriosOrdenados = relatorios.length > 0
        ? [...relatorios].sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
        : [];

    const getMesEAno = (titulo) => {
        // Tenta diferentes formatos de título
        // Formato 1: "Relatório mensal - Mês AAAA" ou "Relatório mensal Mês AAAA"
        let regex = /Relatório mensal\s*-?\s*(\w+)\s+(\d{4})/i;
        let match = titulo.match(regex);

        if (match) {
            return {mes: match[1], ano: match[2]};
        }

        // Formato 2: "Relatório mensal MÊS/AAAA"
        regex = /Relatório mensal\s+(\w+)\/(\d{4})/i;
        match = titulo.match(regex);

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
                <div className={'relatorio'}>
                    <div className={'conteudo'}>
                        <TituloPrimario className={'titulo'} style={{textAlign: "left"}}>
                            <strong>Relatórios Mensais</strong>
                        </TituloPrimario>

                        {loading ? (
                            <div>Carregando relatórios...</div>
                        ) : relatoriosFiltrados.length > 0 ? (
                            <div style={{display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem"}}>
                                {relatoriosParaExibir.map((relatorio, index) => {
                                    const {mes, ano} = getMesEAno(relatorio.post_title);
                                    // Usa a capa do PDF se estiver disponível no cache, senão usa a imagem padrão
                                    const imagemCapa = coverCache[relatorio.guid] || relatorio.imagem || relatorio.featured_image;

                                    return (
                                        <CardRelatorio
                                            key={index}
                                            index={index}
                                            imagem={imagemCapa}
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