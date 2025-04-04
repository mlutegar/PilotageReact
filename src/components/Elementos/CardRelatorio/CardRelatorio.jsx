import {CardRelatorioStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import BotaoSecundario from "../Botoes/BotaoSecundario/BotaoSecundario";
import {useNavigate} from "react-router-dom";

const CardRelatorio = ({titulo, descricao, link}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Pass the PDF URL as a state parameter when navigating
        navigate('/leitor-relatorio', {
            state: {
                pdfUrl: link,
                title: titulo
            }
        });
    }


    return (
        <CardRelatorioStyle>
            <div>
                <img
                    src={"imagens/relatorio/default.png"}
                />
            </div>

            <div className={'conteudo'}>
                <TextoCorrido>
                    <strong>{titulo}</strong>
                </TextoCorrido>

                <TextoCorrido>
                    {descricao}
                </TextoCorrido>

                <div className={'linha'}>

                </div>

                <BotaoSecundario
                    onClick={handleClick}
                    >
                    Saiba Mais
                </BotaoSecundario>
            </div>

        </CardRelatorioStyle>
    );
}

export default CardRelatorio;