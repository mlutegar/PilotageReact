import {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { RelatorioMensalSecaoStyle } from "./Style";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import TituloPrimarioInvertido from "../../Elementos/Textos/TituloPrimarioInvertido/TituloPrimarioInvertido";
import Dots from "../../Elementos/Dots/Dots";
import {RelatorioContext} from "../../../contexts/RelatorioContext";

const RelatorioMensalSecao = () => {
    const { relatorios, loading } = useContext(RelatorioContext);  // Consome os dados
    const [paginaAtual, setPaginaAtual] = useState(0);
    const inicio = paginaAtual;
    const navigate = useNavigate();

    const onDotClick = (dotIndex) => {
        setPaginaAtual(dotIndex);
    }

    const getRelatoriosConsecutivos = (relatorios, inicio) => {
        const total = relatorios.length;
        return [
            relatorios[inicio % total],
            relatorios[(inicio + 1) % total],
            relatorios[(inicio + 2) % total]
        ]
    };

    const relatoriosMaisRecentes = relatorios
        .sort((a, b) => new Date(b.post_date) - new Date(a.post_date)) // Ordena os relatórios pela data
        .slice(0, 5); // Pega apenas os 5 primeiros


    const relatoriosPagina = getRelatoriosConsecutivos(relatoriosMaisRecentes, inicio);

    if (loading) return <div>Carregando...</div>;  // Exibe mensagem enquanto os dados estão sendo carregados

    return (
        <RelatorioMensalSecaoStyle>
                <div className={'conteudo'}>
                    <TituloPrimarioInvertido>
                        <strong>Relatórios</strong> Mensal
                    </TituloPrimarioInvertido>

                    <div className={'cards'}>
                        {relatoriosPagina
                            .map((relatorio, index) => {
                                    return (
                                        <CardRelatorio
                                            key={index}
                                            nome={relatorio.post_title}  // Altere para o campo correto
                                            data={relatorio.post_date}  // Altere para o campo correto
                                            link={relatorio.guid}  // Altere para o campo correto
                                            className={index === 1 ? 'principal' : 'secundario'}
                                        />
                                    );
                                }
                            )}
                    </div>

                    <div className={'botoes'}>
                        <Dots
                            total={relatoriosMaisRecentes.length}
                            ativo={paginaAtual}
                            onDotClick={onDotClick}
                        />

                        <BotaoPrimario
                            onClick={() => navigate('/relatorio-mensal')}
                        >
                            Acessar todos
                        </BotaoPrimario>
                    </div>
                </div>
        </RelatorioMensalSecaoStyle>
);
}

export default RelatorioMensalSecao;
