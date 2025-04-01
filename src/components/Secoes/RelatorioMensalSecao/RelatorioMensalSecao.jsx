import {RelatorioMensalSecaoStyle} from "./Style";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import TituloPrimarioInvertido from "../../Elementos/Textos/TituloPrimarioInvertido/TituloPrimarioInvertido";
import Dots from "../../Elementos/Dots/Dots";
import {useState} from "react";
import relatorios from "../../../data/relatorios.json";
import {useNavigate} from "react-router-dom";

const RelatorioMensalSecao = () => {
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

    const relatoriosPagina = getRelatoriosConsecutivos(relatorios, inicio);

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
                                    nome={relatorio.nome}
                                    data={relatorio.data}
                                    link={relatorio.link}
                                    className={index === 1 ? 'principal' : ''}
                                />
                            );
                        }
                    )}
                </div>

                <div className={'botoes'}>
                    <Dots
                        total={relatorios.length}
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