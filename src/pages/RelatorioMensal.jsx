import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import relatorios from "../data/relatorios.json";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";

const RelatorioMensal = () => {
    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <TituloPrimario style={{textAlign: "left"}}>
                    <strong>Relatórios Mensais</strong>
                </TituloPrimario>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default RelatorioMensal