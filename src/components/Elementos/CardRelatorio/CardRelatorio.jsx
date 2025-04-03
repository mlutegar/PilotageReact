import {CardRelatorioStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import BotaoSecundario from "../Botoes/BotaoSecundario/BotaoSecundario";
import {useNavigate} from "react-router-dom";

const CardRelatorio = ({titulo, descricao}) => {
    const navigate = useNavigate();

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
                    onClick={() => navigate('/leitor')}
                    >
                    Saiba Mais
                </BotaoSecundario>
            </div>

        </CardRelatorioStyle>
    );
}

export default CardRelatorio;