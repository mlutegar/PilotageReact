import Header from "../components/Secoes/Header/Header";
import FooterPrimario from "../components/Secoes/FooterPrimario/FooterPrimario";
import FooterSecundario from "../components/Secoes/FooterSecundario/FooterSecundario";

const Base = (props) => (
    <>
        <Header/>
        <div className="container">
            {props.children}
        </div>
        <FooterPrimario/>
        <FooterSecundario/>
    </>
)

export default Base;