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
            <div className={"btn"}><BotaoPrimario/></div>

        </div>

        <Dots total={3} ativo={0}/>
    </BannerStyle>
)

export default Banner;