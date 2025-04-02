import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BannerStyle } from "./Style";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import Dots from "../../Elementos/Dots/Dots";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banners = [
    {
        titulo: (
            <>
                Construindo seu <strong>Futuro Sólido </strong>
                com <strong>Gestão Segura </strong>
                e <strong>Independente.</strong>
            </>
        ),
        imagem: "imagens/Banner1.png",
        botaoTexto: "Fale conosco",
        botaoLink: "/contato"
    },
    {
        titulo: (
            <>
                Invista com <strong>Segurança</strong> e <strong>Autonomia</strong> na sua jornada financeira.
            </>
        ),
        imagem: "/imagens/banner2.jpg",
        botaoTexto: "Conheça nossos serviços",
        botaoLink: "/servicos"
    },
    {
        titulo: (
            <>
                Uma <strong>parceria sólida</strong> para alcançar seus <strong>objetivos</strong>.
            </>
        ),
        imagem: "/imagens/banner3.jpg",
        botaoTexto: "Saiba mais",
        botaoLink: "/sobre"
    },
];


const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    appendDots: dots => <Dots total={dots.length} ativo={0} className="dots" />,
};

const Banner = () => (
    <BannerStyle>
        <Slider {...settings}>
            {Banners.map((item, index) => (
                <div
                    key={index}
                    className="conteudo-banner"
                    style={{
                        backgroundImage: `url(${item.imagem})`,
                    }}
                >
                    <div className="Titulo">{item.titulo}</div>
                    <div className="btn">
                        <Link to={item.botaoLink}>
                            <BotaoPrimario>
                                <strong>{item.botaoTexto}</strong>
                            </BotaoPrimario>
                        </Link>
                    </div>
                </div>
            ))}
        </Slider>
    </BannerStyle>
);


export default Banner;