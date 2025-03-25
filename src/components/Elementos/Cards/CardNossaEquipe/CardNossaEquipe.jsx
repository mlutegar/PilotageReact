import { CardNossaEquipeStyle } from "./Style";
import Email from "../../../Icones/Email";
import Link from "../../../Icones/Link";
import FaleConoscoButtom from "../../Botoes/FaleConoscoButtom/FaleConoscoButtom";

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
                <FaleConoscoButtom></FaleConoscoButtom>
            </div>
        </CardNossaEquipeStyle>
    );
}

export default CardNossaEquipe;