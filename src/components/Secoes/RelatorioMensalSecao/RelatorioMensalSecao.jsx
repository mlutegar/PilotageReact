import { RelatorioMensalSecaoStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";

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
            </div>
        </RelatorioMensalSecaoStyle>
    );
}

export default RelatorioMensalSecao;