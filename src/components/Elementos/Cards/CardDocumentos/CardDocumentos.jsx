import { CardDocumentosStyle } from "./Style";
import BotaoSecundario from "../../Botoes/BotaoSecundario/BotaoSecundario";

const CardDocumentos = ({ icone, titulo, botao, link }) => {
    return (
        <CardDocumentosStyle>
            <div className={'icone'}>
                {icone}
            </div>
            <div className={'titulo'}>
                {titulo}
            </div>
            <div className={'botao'}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <BotaoSecundario>{botao}</BotaoSecundario>
                </a>
            </div>
        </CardDocumentosStyle>
    );
}

export default CardDocumentos;