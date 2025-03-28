import {RelatorioMensalSecaoStyle} from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import TituloPrimarioInvertido from "../../Elementos/Textos/TituloPrimarioInvertido/TituloPrimarioInvertido";
import Dots from "../../Elementos/Dots/Dots";
import {useState} from "react";

const RelatorioMensalSecao = () => {
    const [paginaAtual, setPaginaAtual] = useState(0);

    const relatorios = [
        {
            "nome": "Janeiro de 2025",
            "data": "01/01/2021",
            "link": "https://www.google.com",
        },
        {
            "nome": "Fevereiro de 2025",
            "data": "01/02/2021",
            "link": "https://www.google.com",
        },
        {
            "nome": "Março de 2025",
            "data": "01/03/2021",
            "link": "https://www.google"
        },
        {
            "nome": "Abril de 2025",
            "data": "01/04/2021",
            "link": "https://www.google.com"
        }
    ];

    const inicio = paginaAtual;

    const onDotClick = (dotIndex) => {
        setPaginaAtual(dotIndex);
    }

    const get3RelatoriosConsecutivos = (relatorios, inicio) => {
        const total = relatorios.length;
        return [
            relatorios[inicio % total],
            relatorios[(inicio + 1) % total],
            relatorios[(inicio + 2) % total]
        ]
    }

    const relatoriosPagina = get3RelatoriosConsecutivos(relatorios, inicio);

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

                    <BotaoPrimario>
                        Acessar todos
                    </BotaoPrimario>
                </div>
            </div>
        </RelatorioMensalSecaoStyle>
    );
}

export default RelatorioMensalSecao;