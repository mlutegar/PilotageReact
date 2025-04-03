import {BannerStyle} from "./Style";
import BotaoPrimario from "../../Elementos/Botoes/BotaoPrimario/BotaoPrimario";
import Dots from "../../Elementos/Dots/Dots";

const Banner = () => (
    <BannerStyle>
        <div className={"conteudo-banner"}>
            <div className={"Titulo"}>
                Construindo seu <strong>Futuro Sólido </strong>
                com <strong>Gestão Segura </strong>
                e <strong>Independente.</strong>
            </div>
            <div className={"btn"}><BotaoPrimario><strong>Fale conosco</strong> </BotaoPrimario></div>

        </div>

        <Dots total={3} ativo={0} className={"dots"}/>
    </BannerStyle>
)

export default Banner;