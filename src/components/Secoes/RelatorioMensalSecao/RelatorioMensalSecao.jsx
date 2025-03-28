import { RelatorioMensalSecaoStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import CardRelatorio from "../../Elementos/Cards/CardRelatorio/CardRelatorio";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import TituloPrimarioInvertido from "../../Elementos/Textos/TituloPrimarioInvertido/TituloPrimarioInvertido";
import Dots from "../../Elementos/Dots/Dots";

const RelatorioMensalSecao = () => {

    return (
        <RelatorioMensalSecaoStyle>
            <div className={'conteudo'}>
                <TituloPrimarioInvertido>
                    <strong>Relatórios</strong> Mensal
                </TituloPrimarioInvertido>

                <div className={'cards'}>
                    <CardRelatorio/>
                    <div className={"principal"}>
                        <CardRelatorio/>
                    </div>
                    <CardRelatorio/>
                </div>

                <div className={'botoes'}>
                    <Dots/>

                    <BotaoPrimario>
                        Acessar todos
                    </BotaoPrimario>
                </div>
            </div>
        </RelatorioMensalSecaoStyle>
    );
}

export default RelatorioMensalSecao;