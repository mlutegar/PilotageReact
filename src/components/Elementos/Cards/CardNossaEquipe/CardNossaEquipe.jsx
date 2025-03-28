import {CardNossaEquipeStyle} from "./Style";
import Email from "../../../Icones/Email";
import Link from "../../../Icones/Link";
import BotaoPrimario from "../../Botoes/BotaoPrimario/BotaoPrimario";
import BotaoSecundario from "../../Botoes/BotaoSecundario/BotaoSecundario";
import {useState} from "react";
import {BotaoFechar} from "../../../Icones/BotaoFechar";

const CardNossaEquipe = ({foto, nome, curriculo, urls}) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    return (
        <CardNossaEquipeStyle onClick={handleModal}>
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
                <BotaoSecundario>
                    Saiba mais
                </BotaoSecundario>
            </div>

            {/*<BotaoFechar className={"close"}/>*/}

            <div className={modal ? 'modal' : 'modal hidden'}>
                <div className={'card'}>
                    <div className={'header modal-header'}>
                        <div className={'foto'}>
                            <img src={foto} alt={'Foto do profissional'}/>
                        </div>
                    </div>
                    <div className={'body modal-body'}>
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
                        <BotaoPrimario>
                            Saiba mais
                        </BotaoPrimario>
                    </div>
                </div>
            </div>
        </CardNossaEquipeStyle>
    );
}

export default CardNossaEquipe;