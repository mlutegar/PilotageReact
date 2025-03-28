import { FooterSecundarioStyle } from "./Style";
import { Link } from "react-router-dom";
import React from "react";

const FooterSecundario = () => {
    return (
        <FooterSecundarioStyle>
            <div className={"conteudo"}>
                <a>© Todos os direitos reservados – Pilotage Investimentos</a>
                <Link to="/documentos-regulatorios">Documentos Regulatórios</Link>
                <Link to="/politicas-de-privacidade">Política de Privacidade</Link>
                <Link to="/canal-de-denuncias">Canal de Denúncias</Link>
                <a>Desenvolvido por: Pixel & Code</a>
            </div>
        </FooterSecundarioStyle>
    );
}

export default FooterSecundario;