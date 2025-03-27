import {BotaoSecundarioStyle} from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";

const BotaoSecundario = ({children}) => (
    <BotaoSecundarioStyle>
        <TextoCorridoInvertido>
            {children}
        </TextoCorridoInvertido>
    </BotaoSecundarioStyle>
)

export default BotaoSecundario