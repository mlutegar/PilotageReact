import {BotaoSecundarioStyle} from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";

const BotaoSecundario = ({children, onClick}) => (
    <BotaoSecundarioStyle onClick={onClick}>
        <TextoCorridoInvertido>
            {children}
        </TextoCorridoInvertido>
    </BotaoSecundarioStyle>
)

export default BotaoSecundario