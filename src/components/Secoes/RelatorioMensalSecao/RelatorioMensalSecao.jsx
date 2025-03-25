import { RelatorioMensalSecaoStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";

const RelatorioMensalSecao = () => {
    return (
        <RelatorioMensalSecaoStyle>
            <div className={'conteudo'}>
                <TituloPrimario>
                    Relatório Mensal
                </TituloPrimario>

                <div className={'cards'}>
                    <CardRelatorio/>
                    <CardRelatorio/>
                    <CardRelatorio/>
                </div>

                <BotaoPrimario>
                    Ir para relatorio
                </BotaoPrimario>
            </div>
        </RelatorioMensalSecaoStyle>
    );
}

export default RelatorioMensalSecao;