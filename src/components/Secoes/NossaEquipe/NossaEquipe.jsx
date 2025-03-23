import { NossaEquipeStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Email from "../../Icones/Email";
import Link from "../../Icones/Link";
import Predio from "../../Icones/Predio";
import Telefone from "../../Icones/Telefone";

const NossaEquipe = () => {
    return (
        <NossaEquipeStyle>
            <div className={'conteudo'}>
                <TituloPrimario>
                    Nossa Equipe
                </TituloPrimario>
                <TextoCorrido>
                    Conheça os profissionais que cuidam dos seus investimentos
                </TextoCorrido>
                <Email/>
                <Link/>
                <Predio/>
                <Telefone/>
            </div>
        </NossaEquipeStyle>
    );
}

export default NossaEquipe;