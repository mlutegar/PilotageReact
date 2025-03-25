import {FooterPrimarioStyle} from "./Style";
import LogoFooter from "../../Icones/LogoFooter";
import {ContatoInfoFooterStyle} from "../../Elementos/Cards/ContatoInfoFooter/Style";
import Predio from "../../Icones/Predio";
import ContatoInfoFooter from "../../Elementos/Cards/ContatoInfoFooter/ContatoInfoFooter";
import PredioClaro from "../../Icones/PredioClaro";
import TelefoneClaro from "../../Icones/TelefoneClaro";
import LinkClaro from "../../Icones/LinkClaro";
import {Link} from "react-router-dom";
import React from "react";


const FooterPrimario = () => {
    return (
        <FooterPrimarioStyle>
            <div className={'conteudo'}>
                <div className={'colunaEsquerda'}>
                    <div className={'logo'}>
                        <LogoFooter/>
                    </div>
                    <ContatoInfoFooter
                        icone={<PredioClaro/>}
                        texto={'Av. Magalhães de Castro, 4800 – 10ºandar sala 104 Jardim Panorama, São Paulo/SP CEP 05676-120'}
                    />
                    <ContatoInfoFooter
                        icone={<TelefoneClaro/>}
                        texto={'+55 (11) 3136 1493'}
                    />
                    <ContatoInfoFooter
                        icone={<LinkClaro/>}
                        texto={<Link to="/">LinkedIn</Link>}
                    />
                </div>
                <div className={'colunaMeio'}>
                    <div className={'guia'}>
                        <h3>Guia</h3>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Relatórios</Link>
                        <Link to={'/'}>Quem Somos</Link>
                        <Link to={'/'}>Contato</Link>
                    </div>
                    <div className={'relatorio'}>
                        <h3>Relatórios Mensais</h3>
                        <Link to={'/'}>Relatório Mensal Pilotage – FEV / 2025
                            28/02/2025</Link>
                        <Link to={'/'}>Relatório Mensal Pilotage – JAN / 2025
                            31/01/2025</Link>
                        <Link to={'/'}>Relatório Mensal Pilotage – DEZ / 2024
                            31/12/2024</Link>
                    </div>
                </div>
                <div className={'colunaDireita'}>
                    <div className={'selo'}>
                        <img src={'/imagens/selo.png'} alt={'Selo'} />
                    </div>
                    <h3>PARCEIRO PILOTAGE</h3>
                    <div className={'panamby'}>
                        <img src={'/imagens/panamby.png'} alt={'Panamby'} />
                    </div>
                </div>

            </div>
        </FooterPrimarioStyle>
    );
}

export default FooterPrimario;