import {NossosValoresStyle} from "./Style";
import TituloPrimario from "../../Texto/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Texto/TextoCorrido/TextoCorrido";
import Olho from "../../Icones/Olho";
import Grafico from "../../Icones/Grafico";
import Calendario from "../../Icones/Calendario";

const NossosValores = () => {
    return (
        <NossosValoresStyle>
            <TituloPrimario>
                Nossos Valores
            </TituloPrimario>
            <TextoCorrido>
                “A Pilotage Investimentos sempre atua de forma totalmente isenta, sem conflitos de interesse, com estilo
                de trabalho baseado nas relações de confiança mútua, construídas cuidadosamente ao longo do tempo,
                sempre personalizando seus serviços à estratégia de longo prazo de cada cliente, sem perder o foco nos
                resultados.”
                ”Cada cliente é tratado de forma única, com sua própria política de investimentos, totalmente aderente
                ao seu perfil de investidor, com verificação diária de exposição da sua carteira e reuniões de
                acompanhamento no mínimo mensais.”
            </TextoCorrido>

            <TituloPrimario>
                Atendimento Personalizado
            </TituloPrimario>
            <Olho/>
            <Grafico/>
            <Calendario/>
        </NossosValoresStyle>
    );
}

export default NossosValores;