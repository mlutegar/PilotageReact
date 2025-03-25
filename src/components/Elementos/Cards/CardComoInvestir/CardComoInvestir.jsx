import { CardComoInvestirStyle } from "./Style";

const CardComoInvestir = ({icone, titulo, subtitulo, conteudo}) => {
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
            <div className={'subtitulo'}>
                {subtitulo}
            </div>
            <div className={'conteudo'}>
                {conteudo}
            </div>

        </CardComoInvestirStyle>
    );
}

export default CardComoInvestir;