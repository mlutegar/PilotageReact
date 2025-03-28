import { CardDocumentosStyle } from "./Style";
import BotaoSecundario from "../../Botoes/BotaoSecundario/BotaoSecundario";

const CardDocumentos = ({icone, titulo, botao}) => {
    return (
        <CardDocumentosStyle>
            <div className={'icone'}>
                {icone}
            </div>
            <div className={'titulo'}>
                {titulo}
            </div>
            <div className={'botao'}>
                <BotaoSecundario>{botao}</BotaoSecundario>
            </div>

        </CardDocumentosStyle>
    );
}

export default CardDocumentos;