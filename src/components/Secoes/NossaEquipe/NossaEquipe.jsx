import { NossaEquipeStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import CardNossaEquipe from "../../Elementos/Cards/CardNossaEquipe/CardNossaEquipe";

const NossaEquipe = () => {
    return (
        <NossaEquipeStyle>
            <div className={'conteudo'}>
                <TituloPrimario>
                    Nossa <strong>Equipe</strong>
                </TituloPrimario>
                <TextoCorrido style={{textAlign: 'center'}}>
                    Conheça os profissionais que <strong>cuidam dos seus investimentos</strong>
                </TextoCorrido>

                <div className={'cards'}>
                    <CardNossaEquipe
                        foto={"imagens/equipe/alexandre.png"}
                        nome={'Alexandre França FRAGA'}
                        curriculo={"imagens/equipe/marca-alexandre.png"}
                        email={"Alexandre.fraga@pvr.capital"}
                        linkedin={"https://www.linkedin.com/in/alexandre-fraga-bb0448/"}
                        descricao={
                            `⬤ Engenheiro Eletrônico pela Escola Politécnica da Universidade de São Paulo, atua há mais de 30 anos no mercado financeiro.<br/><br/>
                            ⬤ Desempenhou funções em diversas áreas em instituições como Lloyds Bank Plc, Banco Pecúnia, Banco Paulista e SOCOPA – Sociedade Corretora Paulista, onde foi Diretor de Marketing e Recursos (Tecnológicos, Humanos e Materiais).<br/><br/>
                            ⬤ Sócio Fundador da Pilotage Investimentos, atualmente é responsável pelas Áreas Financeira e de Risco e Compliance.`
                        }
                    />

                    <CardNossaEquipe
                        foto={"imagens/equipe/marcelo.png"}
                        nome={'Marcelo SADDI Castro'}
                        curriculo={"imagens/equipe/marca-marcelo.png"}
                        email={"marcelo.saddi@pilotage.com.br"}
                        linkedin={"https://www.linkedin.com/in/marcelosaddicastro/"}
                        descricao={
                            `⬤ Economista pela FEA-USP, com MBA em Finanças pelo IBMEC, atua há mais de 30 anos na indústria de Asset Management.<br/><br/>
                            ⬤ Foi Diretor de Renda Fixa da Sulamérica Investimentos, Diretor de Renda Fixa do BNP Asset Management, além de ter sido Gerente de Renda Fixa em Gestão de Ativos do Lloyds Bank Plc.<br/><br/>
                            ⬤ Sócio da Pilotage Investimentos, atualmente é responsável pelas áreas de Gestão e Alocação de Recursos.`
                        }
                    />

                    <CardNossaEquipe
                        foto={"imagens/equipe/reinaldo.png"}
                        nome={'Reinaldo Le GRAZIE'}
                        curriculo={"imagens/equipe/marca-reinaldo.png"}
                        email={"reinaldo.grazie@pilotage.com.br"}
                        linkedin={"https://www.linkedin.com/in/reinaldo-le-grazie-3038691/"}
                        descricao={
                            `⬤ Sócio da Panamby Capital, com vasta experiência no setor financeiro, incluindo passagens pelo Banco Central do Brasil como Vice-Governador de Política Monetária e membro do Comitê de Política Monetária e de Estabilidade Financeira.<br/><br/>
                            ⬤ Anteriormente, foi CIO e CEO da Bradesco Asset Management, além de atuar em posições de liderança em instituições como Lloyds Bank, Nitor e Proventus Invest.<br/><br/>
                            ⬤ Membro de think tanks como o Capital Markets Group do NBEE e o grupo de Estudos de Regulação do Sistema Financeiro da FGV, com foco em inovação e evolução dos sistemas de pagamento e bancários.`
                        }
                        className={'card-reinaldo'}
                    />
                </div>
            </div>
        </NossaEquipeStyle>
    );
}

export default NossaEquipe;
