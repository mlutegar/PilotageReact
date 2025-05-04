import {useState, useContext, useEffect} from "react";
import { BannerStyle } from "./Style";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import Dots from "../../Elementos/Dots/Dots";
import { SecoesContext } from "../../../pages/Home";
import {useSwipeable} from "react-swipeable";
import {useNavigate} from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const [bannerAtual, setBannerAtual] = useState(0);
    const { sobreNosRef, contatoRef, comoInvestirRef, nossaEquipeRef , gestaoRecursosRef } = useContext(SecoesContext);
    const isHomePage = location.pathname === "/";

    const scrollToSection = (sectionName) => {
        if (isHomePage) {
            const ref = {
                sobreNos: sobreNosRef,
                contato: contatoRef,
                nossaEquipe: nossaEquipeRef,
                comoInvestir: comoInvestirRef,
                gestaoRecursos: gestaoRecursosRef
            }[sectionName];

            if (ref && ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(`/?section=${sectionName}`);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => setBannerAtual((bannerAtual + 1) % banners.length),
        onSwipedRight: () => setBannerAtual((bannerAtual - 1 + banners.length) % banners.length),
        trackMouse: true, // para testar swipe com o mouse no navegador
    });

    const handleNossaEquipeClick = () => {
        if (isHomePage) {
            scrollToSection('nossaEquipe');
        } else {
            navigate("/?section=nossaEquipe");
        }
    }

    const banners = [
        {
            titulo: (
                <>
                    Construindo seu <strong>Futuro Sólido </strong><br/>
                    com <strong>Gestão Segura </strong><br/>
                    e <strong>Independente.</strong>
                </>
            ),
            btnTexto: <><strong>Fale conosco</strong></>,
            imagem: "imagens/Banner1.png",
            onClick: () => scrollToSection('contato')
        },
        {
            titulo: (
                <>
                    A história da <strong>Pilotage:</strong>
                    <br/>10 anos de compromisso <strong>com seu futuro.</strong>
                </>
            ),
            btnTexto: <><strong>Saiba mais</strong></>,
            imagem: "imagens/Banner2.png",
            onClick: () => scrollToSection('sobreNos')
        },
        {
            titulo: (
                <>
                    Encontre profissionais <strong>dedicados</strong> a cuidar do <br/>
                    <strong>seu futuro financeiro.</strong>
                </>
            ),
            btnTexto: <><strong>Nossa Equipe</strong></>,
            imagem: "imagens/Banner3.png",
            onClick: handleNossaEquipeClick
        },
        {
            titulo: (
                <>
                    Com a <strong>Pilotage</strong>, você investe com <strong>segurança <br/>e tranquilidade.</strong>
                </>
            ),
            btnTexto: <><strong>Como investir?</strong></>,
            imagem: "imagens/Banner4.png",
            onClick: () => scrollToSection('comoInvestir')
        },
        {
            titulo: (
                <>
                    <strong>Atendimento exclusivo</strong> para entender suas <strong>necessidades</strong> e proporcionar as melhores <strong>soluções financeiras.</strong>
                </>
            ),
            btnTexto: <><strong>Como investir?</strong></>,
            imagem: "imagens/Banner5.png",
            onClick: () => scrollToSection('gestaoRecursos')
        }
    ];

    const onDotClick = (dotIndex) => {
        setBannerAtual(dotIndex);
    };

    // Banner atual baseado no estado
    const bannerAtivo = banners[bannerAtual];

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerAtual(prev => (prev + 1) % banners.length);
        }, 5000); // troca a cada 5000 ms

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <BannerStyle {...handlers} backgroundimage={bannerAtivo.imagem}>
            <div className={"conteudo-banner"}>
                <div className={"Titulo"}>
                    {bannerAtivo.titulo}
                </div>
                <div className={"btn"}>
                    <BotaoPrimario onClick={bannerAtivo.onClick}>
                        {bannerAtivo.btnTexto}
                    </BotaoPrimario>
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