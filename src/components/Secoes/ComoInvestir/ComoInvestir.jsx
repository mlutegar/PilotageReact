import { ComoInvestirStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import Lupa from "../../Icones/Lupa";
import GraficoSeta from "../../Icones/GraficoSeta";
import Dinheiro from "../../Icones/Dinheiro";
import MaoAberta from "../../Icones/MaoAberta";
import CardComoInvestir from "../../Elementos/Cards/CardComoInvestir/CardComoInvestir";
import SetasFluxo from "../../Icones/SetasFluxo";
import {SetaComo} from "../../Icones/SetaComo";
import {SetaComoBola} from "../../Icones/SetaComoBola";

const ComoInvestir = () => {
    return (
        <ComoInvestirStyle>
            <div className={"conteudo"}>
                <TituloPrimario>
                    Como é <strong>investir na Pilotage?</strong>
                </TituloPrimario>
                <div className={"cardGrid"}>
                    <div className={'seta1bola'}>
                        <SetaComoBola/>
                    </div>
                    <div className={'seta2bola'}>
                        <SetaComoBola/>
                    </div>

                    <div className={"cardContainer"}>
                        <div className={"analise-inicial"}>
                            <CardComoInvestir
                                icone={<MaoAberta/>}
                                titulo={"Análise Inicial"}
                                subtitulo={"O primeiro passo é conhecer você!"}
                                conteudo={"Nessa etapa, analisamos sua situação financeira, objetivos e necessidades para entender como podemos ajudar. Nosso foco é oferecer um atendimento personalizado, garantindo que sua experiência de investimento seja eficiente e alinhada com suas expectativas. Se identificarmos um bom alinhamento, seguimos para próxima fase!"}
                            />
                        </div>
                        <div className={'seta1'}>
                            <SetaComo/>
                        </div>
                    </div>
                    <div className={"cardContainer"}>
                        <div className={"analise-investidor"}>
                            <CardComoInvestir
                                icone={<Lupa/>}
                                titulo={"Análise do Investidor"}
                                subtitulo={"Seu perfil, sua estratégia!"}
                                conteudo={"Aqui, analisamos seu perfil de investidor, considerando fatores como apetite ao risco, horizonte de tempo e metas financeiras. Com base nessa análise, definimos juntos a melhor estratégia de investimento, garantindo que sua carteira esteja alinhada com seus objetivos e estilo de vida."}
                            />
                        </div>
                        <div className={'seta2'}>
                            <SetaComo/>
                        </div>
                    </div>

                    <div className={"cardContainer"}>
                        <div className={"monitoramento"}>
                            <CardComoInvestir
                                icone={<GraficoSeta/>}
                                titulo={"Monitoramento Contínuo"}
                                subtitulo={"Monitoramento contínuo para garantir o seu sucesso!"}
                                conteudo={"O investimento não termina na alocação dos ativos. Mensalmente, ou sempre que precisar, realizamos reuniões de acompanhamento para revisar sua carteira e fazer ajustes estratégicos. Além disso, você pode monitorar sua carteira diariamente pela plataforma, garantindo total transparência e controle."}
                            />
                        </div>
                    </div>
                    <div className={"cardContainer"}>
                        <div className={"escolha-ativos"}>
                            <CardComoInvestir
                                icone={<Dinheiro/>}
                                titulo={"Escolha dos Ativos"}
                                subtitulo={"Escolha inteligente de ativos para um futuro sólido!."}
                                conteudo={"Com seu perfil definido, selecionamos os melhores ativos disponíveis, seguindo a Política de Investimentos acordada. Nossa equipe realiza uma gestão de ativos, buscando oportunidades estratégicas para maximizar seus retornos, sempre com transparência e alinhamento aos seus interesses."}
                            />
                        </div>
                        <div className={'seta3'}>
                            <SetaComo/>
                        </div>
                    </div>
                </div>
            </div>
        </ComoInvestirStyle>
    );
};

export default ComoInvestir;
