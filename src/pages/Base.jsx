import Header from "../components/Secoes/Header/Header";
import FooterPrimario from "../components/Secoes/FooterPrimario/FooterPrimario";
import FooterSecundario from "../components/Secoes/FooterSecundario/FooterSecundario";
import {RelatorioProvider} from "../contexts/RelatorioContext";

const Base = (props) => (
    <RelatorioProvider>
        <Header/>
        <div className="container">
            {props.children}
        </div>
        <FooterPrimario/>
        <FooterSecundario/>
    </RelatorioProvider>
)

export default Base;