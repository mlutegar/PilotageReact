import { CardRelatorioStyle } from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";

const CardRelatorio = ({data, className}) => {
    return (
        <CardRelatorioStyle className={className}>
            <TextoCorridoInvertido className={'data'}>
                {data}
            </TextoCorridoInvertido>
        </CardRelatorioStyle>
    );
}

export default CardRelatorio;