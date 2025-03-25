import { ContatoInfoFooterStyle } from "./Style";

const ContatoInfoFooter = ({icone, texto}) => {
    return (
        <ContatoInfoFooterStyle>
                <div className={'icone'}>
                    {icone}
                </div>
                <div className={'texto'}>
                    {texto}
                </div>
        </ContatoInfoFooterStyle>
    );
}

export default ContatoInfoFooter;