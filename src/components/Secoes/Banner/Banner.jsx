import {BannerStyle} from "./Style";
import FaleConoscoButtom from "../../Elementos/Botoes/FaleConoscoButtom/FaleConoscoButtom";
import Dots from "../../Elementos/Dots/Dots";

const Banner = () => (
    <BannerStyle>
        <div className={"conteudo-banner"}>
            <div className={"Titulo"}>
                Construindo seu <strong>Futuro Sólido </strong>
                com <strong>Gestão Segura </strong>
                e <strong>Independente.</strong>
            </div>
            <div className={"btn"}><FaleConoscoButtom/></div>
            <Dots total={3} ativo={0}/>
        </div>
    </BannerStyle>
)

export default Banner;