import { CardComoInvestirStyle } from "./Style";

const CardComoInvestir = ({icone, titulo, conteudo}) => {
    return (
        <CardComoInvestirStyle>
            <div className={'header'}>
                <div className={'icone'}>
                    {icone}
                </div>
                <div className={'titulo'}>
                    {titulo}
                </div>
            </div>
            <div className={'conteudo'}>
                {conteudo}
            </div>
        </CardComoInvestirStyle>
    );
}

export default CardComoInvestir;