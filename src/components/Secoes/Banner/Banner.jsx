import {Link} from "react-router-dom";
import {BannerStyle, Texto} from "./Style";
import FaleConoscoButtom from "../../FaleConoscoButtom/FaleConoscoButtom";

const Banner = () => (
    <BannerStyle>
        <div className={"conteudo-banner"}>
            <div className={"Titulo"}>
                Construindo seu <strong>Futuro Sólido </strong>
                com <strong>Gestão Segura </strong>
                e <strong>Independente.</strong>
            </div>
            <div className={"btn"}><FaleConoscoButtom/></div>
        </div>
    </BannerStyle>
)

export default Banner;