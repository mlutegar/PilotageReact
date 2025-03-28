import { CardRelatorioStyle } from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";

const CardRelatorio = ({data}) => {
    return (
        <CardRelatorioStyle>
            <TextoCorridoInvertido>
                {data}
            </TextoCorridoInvertido>
        </CardRelatorioStyle>
    );
}

export default CardRelatorio;