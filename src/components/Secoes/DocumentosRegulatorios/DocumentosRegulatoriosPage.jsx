import {DocumentosRegulatoriosPageStyle} from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import CardDocumentos from "../../Elementos/Cards/CardDocumentos/CardDocumentos";
import {FormularioReferencia} from "../../Icones/DocumentosIcones/FormularioReferencia";
import {CodigoEtica} from "../../Icones/DocumentosIcones/CodigoEtica";
import {Regras} from "../../Icones/DocumentosIcones/Regras";
import {PoliticaSeguranca} from "../../Icones/DocumentosIcones/PoliticaSeguranca";
import {PoliticaGestao} from "../../Icones/DocumentosIcones/PoliticaGestao";
import {PoliticaNegociacao} from "../../Icones/DocumentosIcones/PoliticaNegociacao";
import {PolticaRateio} from "../../Icones/DocumentosIcones/PolticaRateio";
import {ManualPrecificacao} from "../../Icones/DocumentosIcones/ManualPrecificacao";

const DocumentosRegulatoriosPage = () => {
    return (
        <DocumentosRegulatoriosPageStyle>
            <div className={"titulo"}>
                <TituloPrimario>
                    <strong>Documentos Regulatórios</strong>
                </TituloPrimario>
            </div>
            <div className={"subtitulo"}>
                <h3>Políticas e Procedimentos</h3>
            </div>
            <div className={"conteudo"}>
                <div className={"cardsGrid"}>
                    <CardDocumentos
                        icone={<FormularioReferencia/>}
                        titulo={"Formulário de Referência"}
                        botao={"Acessar"}
                        link={"https://cvmweb.cvm.gov.br/SWB/Sistemas/SCW/CPublica/FormRefAdmCart/ConsultaFormReferenciaAdmCarteiraPJ.aspx?PK_PARTIC=144475&COMPTC=2023"}
                    />
                    <CardDocumentos
                        icone={<CodigoEtica/>}
                        titulo={"Código de Ética"}
                        botao={"Baixar"}
                        link={"https://pilotage.com.br/home/wp-content/uploads/2023/11/2023-PGR-Codigo-de-Etica.pdf"}
                    />
                    <CardDocumentos
                        icone={<Regras/>}
                        titulo={"Regras e Procedimentos dos Controles Internos"}
                        botao={"Baixar"}
                        link={"https://pilotage.com.br/site/wp-content/uploads/2021/03/PGR-Controles-Internos.pdf"}
                    />
                    <CardDocumentos
                        icone={<PoliticaSeguranca/>}
                        titulo={"Política de Segurança da Informação"}
                        botao={"Baixar"}
                        link={"https://pilotage.com.br/site/wp-content/uploads/2021/03/PGR-Seguranc%CC%A7a-da-Informac%CC%A7a%CC%83o.pdf"}
                    />
                    <CardDocumentos
                        icone={<PoliticaGestao/>}
                        titulo={"Política de Gestão de Riscos"}
                        botao={"Acessar"}
                        link={"https://pilotage.com.br/site/wp-content/uploads/2021/03/PGR-Seguranc%CC%A7a-da-Informac%CC%A7a%CC%83o.pdf"}
                    />
                    <CardDocumentos
                        icone={<PoliticaNegociacao/>}
                        titulo={"Política de Negociação de Valores por Sócios e Colaboradores"}
                        botao={"Baixar"}
                        link={"https://pilotage.com.br/site/wp-content/uploads/2021/03/PGR-Poli%CC%81tica-de-Compra-e-Venda-de-Valores-Mobilia%CC%81rios-por-Colaboradores-e-a-Pro%CC%81pria-Empresa.pdf"}
                    />
                    <CardDocumentos
                        icone={<PolticaRateio/>}
                        titulo={"Política de Rateio de Ordens"}
                        botao={"Baixar"}
                        link={"https://pilotage.com.br/site/wp-content/uploads/2021/03/PGR-Politica-de-Rateio-de-Ordens.pdf"}

                    />
                    <CardDocumentos
                        icone={<ManualPrecificacao/>}
                        titulo={"Manual de Precificação de Ativos de Carteiras Administradas"}
                        botao={"Baixar"}
                        link={"https://pilotage.com.br/home/wp-content/uploads/2022/04/2021_pgr_manual_de_precificacao_de_ativos.pdf"}
                    />
                    <CardDocumentos
                        icone={<PoliticaGestao/>}
                        titulo={"Política de Geração de Liquidez"}
                        botao={"Acessar"}
                        link={"https://pilotage.com.br/home/wp-content/uploads/2022/11/2022-PGR-Politca-de-Gerenciamento-de-Liquidez.pdf"}
                    />
                </div>
                <div className={"disclaimer"}>
                    <TextoCorrido className={"texto"}>
                        <strong>Disclaimer:</strong>
                        <br/>A Pilotage Investimentos é uma gestora de recursos de valores mobiliários autorizada pela Comissão de Valores Mobiliários – CVM, conforme Ato Declaratório n° 14.323 de 08/07/2015 e constituída na forma da Resolução CVM n° 21 de 25/02/2021. A Pilotage Investimentos tem, como coligada desde outubro de 2023, a Panamby Capital, também gestora de recursos de valores mobiliários devidamente autorizada pela CVM.<br/>

                        <br/>Todas as regras regulatórias de segregação são observadas pelas gestoras e podem ser consultadas no Código de Ética da Pilotage Investimentos, disponível neste site. Os fundos de investimentos e as carteiras administradas podem ser geridos tanto pela Pilotage Investimentos quanto pela Panamby Capital, a depender da estratégia do fundo ou da carteira.<br/>

                        <br/>As informações contidas neste site são de caráter meramente informativo e não constituem qualquer tipo de aconselhamento de investimentos, não devendo ser utilizadas com este propósito. Nenhuma informação contida neste site constitui uma solicitação, oferta ou recomendação para compra ou venda de quotas de fundos de investimento, ou de quaisquer outros valores mobiliários. A Pilotage Investimentos e a Panamby Capital, seus sócios e funcionários isentam-se de responsabilidade sobre quaisquer danos resultantes direta ou indiretamente da utilização das informações contidas neste site.<br/>

                        <br/><strong>Importante:</strong>
                        <br/>Fundos de Investimento não contam com garantia do Administrador, do Gestor, de qualquer mecanismo de seguro ou Fundo Garantidor de Crédito – FGC.
                        Investimentos nos mercados financeiros e de capitais estão sujeitos a riscos de perda superior ao valor total do capital investido e Rentabilidade passada não representa garantia de Rentabilidade futura. Leia com atenção o prospecto, o formulário de informações complementares, lâmina de informações essenciais e o regulamento antes de investir. “
                    </TextoCorrido>
                </div>
            </div>
        </DocumentosRegulatoriosPageStyle>
    );
}

export default DocumentosRegulatoriosPage;