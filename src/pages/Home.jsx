import Base from "./Base"
import Banner from "../components/Secoes/Banner/Banner";
import SobreNos from "../components/Secoes/SobreNos/SobreNos";
import NossosValores from "../components/Secoes/NossosValores/NossosValores";
import GestaoRecursos from "../components/Secoes/GestaoRecursos/GestaoRecursos";
import ComoInvestir from "../components/Secoes/ComoInvestir/ComoInvestir";
import NossaEquipe from "../components/Secoes/NossaEquipe/NossaEquipe";
import RelatorioMensalSecao from "../components/Secoes/RelatorioMensalSecao/RelatorioMensalSecao";
import Contato from "../components/Secoes/Contato/Contato";

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