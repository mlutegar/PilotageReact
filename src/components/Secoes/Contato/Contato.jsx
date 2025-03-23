import { ContatoStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import Predio from "../../Icones/Predio";
import Telefone from "../../Icones/Telefone";

const Contato = () => {
    return (
        <ContatoStyle>
            <TituloPrimario>
                Contato
            </TituloPrimario>
            <Predio/>
            <Telefone/>
        </ContatoStyle>
    );
}

export default Contato;