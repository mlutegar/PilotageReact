import { GestaoRecursosStyle } from "./Style";
import TituloPrimario from "../../Texto/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Texto/TextoCorrido/TextoCorrido";
import Cadeado from "../../Icones/Cadeado";

const GestaoRecursos = () => {
    return (
        <GestaoRecursosStyle>
            <TituloPrimario>
                Gestão de Recursos de Terceiros
            </TituloPrimario>
            <TextoCorrido>
                Com tantas opções de investimento no mercado, como escolher a melhor?
            </TextoCorrido>
            <TextoCorrido>
                Na Pilotage Investimentos, administramos seu patrimônio com eficiência, diversificando riscos conforme seu perfil, objetivos e necessidade de liquidez.
                Criamos Carteiras Administradas personalizadas, sempre alinhadas à sua política de investimentos e sob supervisão da CVM.
            </TextoCorrido>
            <TextoCorrido>
                Transparência e Segurança
            </TextoCorrido>
            <TextoCorrido>
                Seus ativos são sempre registrados em seu nome e movimentados diretamente entre sua conta e as aplicações, sem intermediação da Pilotage.
            </TextoCorrido>
            <Cadeado/>
            <TextoCorrido>
                Independência Total
            </TextoCorrido>
            <TextoCorrido>
                Não recebemos comissões de terceiros. Nossa remuneração vem exclusivamente da taxa de gestão, garantindo que as decisões sejam sempre focadas no melhor retorno para você.
            </TextoCorrido>
        </GestaoRecursosStyle>
    );
}

export default GestaoRecursos;