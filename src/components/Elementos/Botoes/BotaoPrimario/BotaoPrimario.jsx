import {BotaoPrimarioStyle} from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";

const BotaoPrimario = ({children, onClick}) => (
    <BotaoPrimarioStyle onClick={onClick}>
        <TextoCorrido>
            {children}
        </TextoCorrido>
    </BotaoPrimarioStyle>
)

export default BotaoPrimario