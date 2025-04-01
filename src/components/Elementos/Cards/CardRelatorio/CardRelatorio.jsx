import { CardRelatorioStyle } from "./Style";
import TextoCorrido from "../../Textos/TextoCorrido/TextoCorrido";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";
import {useNavigate} from "react-router-dom";

const CardRelatorio = ({data, className}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/leito-relatorio');
    }

    return (
        <CardRelatorioStyle className={className} onClick={handleClick}>
            <TextoCorridoInvertido className={'data'}>
                {data}
            </TextoCorridoInvertido>
        </CardRelatorioStyle>
    );
}

export default CardRelatorio;