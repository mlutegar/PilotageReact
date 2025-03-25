import { GestaoRecursosStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Cadeado from "../../Icones/Cadeado";
import Mao from "../../Icones/Mao";

const GestaoRecursos = () => {
    return (
        <GestaoRecursosStyle>
        <div className={'conteudo'}>
            <div className={'titulo'}>
                <TituloPrimario>
                    Gestão de <strong>Recursos de Terceiros</strong>
                </TituloPrimario>
            </div>
            <div className={'pergunta'}>
                <TextoCorrido>
                    <h3>Com tantas opções de investimento no mercado, como escolher a melhor?</h3>
                </TextoCorrido>
            </div>
            <div className={'caixaTexto'}>
                <TextoCorrido>
                    Na <strong>Pilotage Investimentos</strong>, administramos seu patrimônio com eficiência, diversificando riscos conforme
                    <strong> seu perfil, objetivos e necessidade de liquidez. </strong>
                    Criamos Carteiras Administradas personalizadas, sempre alinhadas à sua política de investimentos e sob
                    supervisão da CVM.
                </TextoCorrido>
            </div>

            <div className={'item'}>
                <div>
                    <Cadeado/>
                </div>
                <div>
                    <TextoCorrido>
                        <h4>Transparência e Segurança</h4>
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
                        <h4>Independência Total</h4>
                    </TextoCorrido>
                    <TextoCorrido>
                        Não recebemos comissões de terceiros. Nossa remuneração vem exclusivamente da taxa de gestão,
                        garantindo que as decisões sejam sempre focadas no melhor retorno para você.
                    </TextoCorrido>
                </div>
            </div>
        </div>
        </GestaoRecursosStyle>
);
}

export default GestaoRecursos;