import { ComoInvestirStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import Mao from "../../Icones/Mao";
import Lupa from "../../Icones/Lupa";
import GraficoSeta from "../../Icones/GraficoSeta";
import Dinheiro from "../../Icones/Dinheiro";

const ComoInvestir = () => {
    return (
        <ComoInvestirStyle>
            <div className={"conteudo"}>
                <TituloPrimario>
                    Como é investir na Pilotage?
                </TituloPrimario>
                <Mao/>
                <Lupa/>
                <GraficoSeta/>
                <Dinheiro/>
            </div>
        </ComoInvestirStyle>
    );
}

export default ComoInvestir;