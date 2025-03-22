import Header from "../components/Header/Header";
import FooterPrimario from "../components/FooterPrimario/FooterPrimario";
import FooterSecundario from "../components/FooterSecundario/FooterSecundario";

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