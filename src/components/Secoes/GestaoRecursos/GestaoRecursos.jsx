import { GestaoRecursosStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Cadeado from "../../Icones/Cadeado";
import Mao from "../../Icones/Mao";

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
                Na Pilotage Investimentos, administramos seu patrimônio com eficiência, diversificando riscos conforme
                seu perfil, objetivos e necessidade de liquidez.
                Criamos Carteiras Administradas personalizadas, sempre alinhadas à sua política de investimentos e sob
                supervisão da CVM.
            </TextoCorrido>

            <div className={'item'}>
                <div>
                    <Cadeado/>
                </div>
                <div>
                    <TextoCorrido>
                        Transparência e Segurança
                    </TextoCorrido>
                    <TextoCorrido>
                        Seus ativos são sempre registrados em seu nome e movimentados diretamente entre sua conta e as
                        aplicações, sem intermediação da Pilotage.
                    </TextoCorrido>
                </div>
            </div>

            <div className={'item'}>
                <div>
                    <Mao/>
                </div>
                <div>
                    <TextoCorrido>
                        Independência Total
                    </TextoCorrido>
                    <TextoCorrido>
                        Não recebemos comissões de terceiros. Nossa remuneração vem exclusivamente da taxa de gestão,
                        garantindo que as decisões sejam sempre focadas no melhor retorno para você.
                    </TextoCorrido>
                </div>
            </div>
        </GestaoRecursosStyle>
);
}

export default GestaoRecursos;