import {BotaoPrimarioStyle} from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";

const BotaoPrimario = ({children}) => (
    <BotaoPrimarioStyle>
        <TextoCorrido>
            {children}
        </TextoCorrido>
    </BotaoPrimarioStyle>
)

export default BotaoPrimario