import {CardNossaEquipeStyle} from "./Style";
import Email from "../../../Icones/Email";
import Link from "../../../Icones/Link";
import BotaoPrimario from "../../Botoes/BotaoPrimario/BotaoPrimario";
import BotaoSecundario from "../../Botoes/BotaoSecundario/BotaoSecundario";
import {useState, useEffect} from "react";
import {BotaoFechar} from "../../../Icones/BotaoFechar";

const CardNossaEquipe = ({foto, nome, curriculo, urls}) => {
    const [modal, setModal] = useState(false);

    // Quando o modal está aberto, desabilita o scroll da página
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modal]);

    const handleOpenModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setModal(true);
    }

    const handleCloseModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setModal(false);
    }

    return (
        <>
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
                    <BotaoSecundario onClick={handleOpenModal}>
                        Saiba mais
                    </BotaoSecundario>
                </div>
            </CardNossaEquipeStyle>

            {modal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseModal}>
                            <BotaoFechar />
                        </button>
                        <div className='modal-header'>
                            <div className='foto'>
                                <img src={foto} alt={'Foto do profissional'}/>
                            </div>
                        </div>
                        <div className='modal-body'>
                            <div className='nome'>
                                {nome}
                            </div>
                            <div className='curriculo'>
                                <img src={curriculo} alt={'Curriculo'}/>
                            </div>
                            <div className='urls'>
                                <Email/>
                                <Link/>
                            </div>
                            <BotaoPrimario>
                                Saiba mais
                            </BotaoPrimario>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardNossaEquipe;