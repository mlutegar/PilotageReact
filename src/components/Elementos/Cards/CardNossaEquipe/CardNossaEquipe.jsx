import { CardNossaEquipeStyle } from "./Style";
import Email from "../../../Icones/Email";
import Link from "../../../Icones/Link";
import BotaoPrimario from "../../Botoes/BotaoPrimario/BotaoPrimario";

const CardNossaEquipe = ({foto, nome, curriculo, urls}) => {
    return (
        <CardNossaEquipeStyle>
            <div className={'header'}>
                <div className={'foto'}>
                    <img src={foto} alt={'Foto do profissional'}/>
                </div>
            </div>
            <div className={'body'}>
                <div className={'nome'}>
                    {nome}
                </div>
                <div className={'curriculo'}>
                    <img src={curriculo} alt={'Curriculo'}/>
                </div>
                <div className={'urls'}>
                <Email/>
                    <Link/>
                </div>
                <BotaoPrimario></BotaoPrimario>
            </div>
        </CardNossaEquipeStyle>
    );
}

export default CardNossaEquipe;