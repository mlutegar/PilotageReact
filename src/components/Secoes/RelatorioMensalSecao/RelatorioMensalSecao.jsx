import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { RelatorioMensalSecaoStyle } from "./Style";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import TituloPrimarioInvertido from "../../Elementos/Textos/TituloPrimarioInvertido/TituloPrimarioInvertido";
import Dots from "../../Elementos/Dots/Dots";
import { RelatorioContext } from "../../../contexts/RelatorioContext";

const RelatorioMensalSecao = () => {
    const { relatorios, loading } = useContext(RelatorioContext);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const navigate = useNavigate();

    const onDotClick = (dotIndex) => {
        setPaginaAtual(dotIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => setPaginaAtual((paginaAtual + 1) % relatoriosMaisRecentes.length),
        onSwipedRight: () => setPaginaAtual((paginaAtual - 1 + relatoriosMaisRecentes.length) % relatoriosMaisRecentes.length),
        trackMouse: true,
    });

    const getRelatoriosConsecutivos = (relatorios, inicio) => {
        const total = relatorios.length;
        return [
            relatorios[inicio % total],
            relatorios[(inicio + 1) % total],
            relatorios[(inicio + 2) % total]
        ];
    };

    if (loading) return <div>Carregando...</div>;

    const relatoriosMaisRecentes = relatorios
        .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
        .slice(0, 5);

    const relatoriosPagina = getRelatoriosConsecutivos(relatoriosMaisRecentes, paginaAtual);

    return (
        <RelatorioMensalSecaoStyle {...handlers}>
            <div className={'conteudo'}>
                <TituloPrimarioInvertido>
                    <strong>Relatórios</strong> Mensal
                </TituloPrimarioInvertido>

                <div className={'cards'}>
                    {relatoriosPagina.map((relatorio, index) => (
                        <CardRelatorio
                            key={index}
                            index={index}
                            nome={relatorio.post_title}
                            data={relatorio.post_date}
                            link={relatorio.guid}
                            className={index === 1 ? 'principal' : 'secundario'}
                        />
                    ))}
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
};

export default RelatorioMensalSecao;
