import {CardRelatorioStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import BotaoSecundario from "../Botoes/BotaoSecundario/BotaoSecundario";

const CardRelatorio = ({imagem, titulo, descricao}) => {
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

                <BotaoSecundario>
                    Saiba Mais
                </BotaoSecundario>
            </div>

        </CardRelatorioStyle>
    );
}

export default CardRelatorio;