import { CardRelatorioStyle } from "./Style";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";
import { useNavigate } from "react-router-dom";

const CardRelatorio = ({ data, nome, link, className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Pass the PDF URL as a state parameter when navigating
        navigate('/leitor-relatorio', {
            state: {
                pdfUrl: link,
                title: nome
            }
        });
    }

    return (
        <CardRelatorioStyle className={className} onClick={handleClick}>
            <TextoCorridoInvertido className={'nome'}>
                {nome}
            </TextoCorridoInvertido>
        </CardRelatorioStyle>
    );
}

export default CardRelatorio;