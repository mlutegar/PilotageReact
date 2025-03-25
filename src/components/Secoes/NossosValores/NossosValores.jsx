import {NossosValoresStyle} from "./Style";
import Olho from "../../Icones/Olho";
import Grafico from "../../Icones/Grafico";
import Calendario from "../../Icones/Calendario";
import TituloPrimarioInvertido from "../../Elementos/Textos/TituloPrimarioInvertido/TituloPrimarioInvertido";
import TextoCorridoInvertido from "../../Elementos/Textos/TextoCorridoInvertido/TextoCorridoInvertido";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";

const NossosValores = () => {
    return (
        <NossosValoresStyle>
            <div className={"conteudo"}>
                <TituloPrimarioInvertido>
                    Nossos <strong>Valores</strong>
                </TituloPrimarioInvertido>
                <div className={'paragrafo1'}>
                    <TextoCorridoInvertido>
                        “A <strong>Pilotage Investimentos</strong> sempre atua de forma <strong>totalmente isenta, sem conflitos de interesse</strong>,
                        com
                        estilo de trabalho baseado nas <strong>relações de confiança mútua</strong>, construídas cuidadosamente <strong>ao longo
                        do tempo</strong>,
                        sempre personalizando seus serviços à estratégia de longo prazo de cada cliente, sem perder o
                        <strong>foco nos resultados</strong>.”
                    </TextoCorridoInvertido>
                </div>
                <div className={'paragrafo2'}>
                    <TextoCorridoInvertido>
                        ”Cada cliente é tratado de forma <strong>única</strong>, com sua própria <strong>política de investimentos</strong>, totalmente
                        aderente ao seu perfil de investidor, com <strong>verificação diária</strong>  de exposição da sua carteira e
                        <strong> reuniões de acompanhamento</strong> no mínimo mensais.”
                    </TextoCorridoInvertido>
                </div>
                    <div className={"titulo2"}>
                        <TituloPrimarioInvertido>
                            Atendimento <strong>Personalizado</strong>
                        </TituloPrimarioInvertido>
                    </div>

                    <div className={'itens'}>
                        <div className={'item'}>
                            <Olho/>
                            <TextoCorridoInvertido>
                                ✔ Verificação diária da exposição da carteira
                            </TextoCorridoInvertido>
                        </div>

                        <div className={'item'}>
                            <Grafico/>
                            <TextoCorridoInvertido>
                                ✔ Gestão estratégica alinhada aos seus objetivos
                            </TextoCorridoInvertido>
                        </div>

                        <div className={'item'}>
                            <Calendario/>
                            <TextoCorridoInvertido>
                                ✔ Acompanhamento contínuo com reuniões mensais
                            </TextoCorridoInvertido>
                        </div>
                    </div>
                </div>
        </NossosValoresStyle>
);
}

export default NossosValores;