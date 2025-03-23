import {SobreNosStyle} from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Logo from "../../Icones/Logo";

const SobreNos = () => {
    return (
        <SobreNosStyle>
            <TituloPrimario>
                Sobre a Pilotage
            </TituloPrimario>
            <div className={"conteudo"}>
                <TextoCorrido>
                    A Pilotage Gestão de Recursos foi fundada em 2015 com o objetivo específico de ajudar Famílias e
                    Indivíduos a gerir seus recursos financeiros, sendo empresa autorizada pela Comissão de Valores
                    Mobiliários – CVM, para prestar serviços de administração de carteira de valores mobiliários, consoante
                    o artigo 23, da Lei nº 6.385, de 07.12.1976, e da Resolução CVM nº 21, de 25/02/2021 e alterações
                    posteriores, por meio de Ato Declaratório nº 14.323, de 08 de julho de 2015.

                    Somos um Multi-Family Office que pratica uma gestão ativa de investimentos com visão de médio e longo
                    prazos, de forma personalizada e, o mais importante, totalmente independente, sem qualquer vínculo com
                    outras instituições.

                    Em 2019 foi criada a Pilotage Assessoria Empresarial, para atuar como correspondente de instituições
                    financeiras, principalmente relacionadas a operações no mercado de câmbio e estruturação de operações
                    financeiras.

                    Já em 2020, em decorrência da maior proximidade com os clientes, foi criada a área de Fusões e
                    Aquisições (M & A), aumentando assim, o leque de serviços prestados.

                    Em 2023 a Panamby Capital, gestora de recursos também devidamente autorizada pela CVM, passa a ser
                    coligada da Pilotage Investimentos, aumentando a gama de produtos para os nossos clientes
                </TextoCorrido>
                <Logo/>
            </div>
        </SobreNosStyle>
    );
}

export default SobreNos;