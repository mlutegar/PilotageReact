import { useState } from "react";
import { BannerStyle } from "./Style";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import Dots from "../../Elementos/Dots/Dots";

const Banner = () => {
    const [bannerAtual, setBannerAtual] = useState(0);

    // Dados dos banners com imagem
    const banners = [
        {
            titulo: (
                <>
                    Construindo seu <strong>Futuro Sólido </strong>
                    com <strong>Gestão Segura </strong>
                    e <strong>Independente.</strong>
                </>
            ),
            btnTexto: <><strong>Fale conosco</strong></>,
            imagem: "imagens/Banner1.png"
        },
        {
            titulo: (
                <>
                    A história da <strong>Pilotage:</strong>
                    <br/>10 anos de compromisso <strong>com seu futuro.</strong>
                </>
            ),
            btnTexto: <><strong>Saiba mais</strong></>,
            imagem: "imagens/Banner2.png"
        },
        {
            titulo: (
                <>
                    Encontre profissionais <strong>dedicados</strong> a cuidar do <br/>
                    <strong>seu futuro financeiro.</strong>
                </>
            ),
            btnTexto: <><strong>Nossa Equipe</strong></>,
            imagem: "imagens/Banner3.png"
        },
        {
            titulo: (
                <>
                    Com a <strong>Pilotage</strong>, você investe com <strong>segurança <br/>e tranquilidade.</strong>
                </>
            ),
            btnTexto: <><strong>Como investir?</strong></>,
            imagem: "imagens/Banner4.png"
        },
        {
            titulo: (
                <>
                    <strong>Atendimento exclusivo</strong> para entender suas <strong>necessidades</strong> e proporcionar as melhores <strong>soluções financeiras.</strong>
                </>
            ),
            btnTexto: <><strong>Como investir?</strong></>,
            imagem: "imagens/Banner5.png"
        }
    ];

    const onDotClick = (dotIndex) => {
        setBannerAtual(dotIndex);
    };

    // Banner atual baseado no estado
    const bannerAtivo = banners[bannerAtual];

    return (
        <BannerStyle backgroundImage={bannerAtivo.imagem}>
            <div className={"conteudo-banner"}>
                <div className={"Titulo"}>
                    {bannerAtivo.titulo}
                </div>
                <div className={"btn"}>
                    <BotaoPrimario>{bannerAtivo.btnTexto}</BotaoPrimario>
                </div>
            </div>

            <Dots
                total={banners.length}
                ativo={bannerAtual}
                className={"dots"}
                onDotClick={onDotClick}
            />
        </BannerStyle>
    );
};

export default Banner;