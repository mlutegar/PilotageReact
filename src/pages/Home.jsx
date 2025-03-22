import Base from "./Base"
import Banner from "../components/Banner/Banner";
import SobreNos from "../components/SobreNos/SobreNos";
import NossosValores from "../components/NossosValores/NossosValores";
import GestaoRecursos from "../components/GestaoRecursos/GestaoRecursos";
import ComoInvestir from "../components/ComoInvestir/ComoInvestir";
import NossaEquipe from "../components/NossaEquipe/NossaEquipe";
import RelatorioMensalSecao from "../components/RelatorioMensalSecao/RelatorioMensalSecao";
import Contato from "../components/Contato/Contato";
import FooterPrimario from "../components/FooterPrimario/FooterPrimario";
import FooterSecundario from "../components/FooterSecundario/FooterSecundario";

const Home = () => {
  return (
    <Base>
        <Banner/>
        <SobreNos/>
        <NossosValores/>
        <GestaoRecursos/>
        <ComoInvestir/>
        <NossaEquipe/>
        <RelatorioMensalSecao/>
        <Contato/>
    </Base>
  )
}

export default Home