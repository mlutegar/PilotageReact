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
                    Nossos Valores
                </TituloPrimarioInvertido>
                <TextoCorridoInvertido>
                    “A Pilotage Investimentos sempre atua de forma totalmente isenta, sem conflitos de interesse, com
                    estilo de trabalho baseado nas relações de confiança mútua, construídas cuidadosamente ao longo do tempo,
                    sempre personalizando seus serviços à estratégia de longo prazo de cada cliente, sem perder o foco
                    nos resultados.”
                </TextoCorridoInvertido>

                <TextoCorridoInvertido>
                    ”Cada cliente é tratado de forma única, com sua própria política de investimentos, totalmente
                    aderente ao seu perfil de investidor, com verificação diária de exposição da sua carteira e reuniões de
                    acompanhamento no mínimo mensais.”
                </TextoCorridoInvertido>

                <TituloPrimarioInvertido>
                    Atendimento Personalizado
                </TituloPrimarioInvertido>

                <div className={'itens'}>
                    <div className={'item'}>
                        <Olho/>
                        <TextoCorridoInvertido>
                            ✔Verificação diária da exposição da carteira
                        </TextoCorridoInvertido>
                    </div>

                    <div className={'item'}>
                        <Grafico/>
                        <TextoCorridoInvertido>
                            ✔Gestão estratégica alinhada aos seus objetivos
                        </TextoCorridoInvertido>
                    </div>

                    <div className={'item'}>
                        <Calendario/>
                        <TextoCorridoInvertido>
                            ✔Acompanhamento contínuo com reuniões mensais
                        </TextoCorridoInvertido>
                    </div>
                </div>
            </div>
        </NossosValoresStyle>
    );
}

export default NossosValores;