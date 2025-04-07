import Header from "../components/Secoes/Header/Header";
import FooterPrimario from "../components/Secoes/FooterPrimario/FooterPrimario";
import FooterSecundario from "../components/Secoes/FooterSecundario/FooterSecundario";
import {RelatorioProvider} from "../contexts/RelatorioContext";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


const Base = (props) => (
    <RelatorioProvider>
        <ScrollToTop/>
        <Header/>
        <div className="container">
            {props.children}
        </div>
        <FooterPrimario/>
        <FooterSecundario/>
    </RelatorioProvider>
)

export default Base;