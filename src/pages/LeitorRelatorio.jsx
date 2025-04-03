import { useLocation } from "react-router-dom";
import Base from "./Base";
import Teste from "../components/Teste/Teste";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";

const LeitorRelatorio = () => {
    // Use location to get the state that was passed during navigation
    const location = useLocation();

    // Get the PDF URL and title from the state, or use defaults if they're not available
    const pdfUrl = location.state?.pdfUrl || "https://pilotage.com.br/home/wp-content/uploads/2025/03/Relatorio-mensal-Fevereiro-2025.pdf";
    const title = location.state?.title || "Relatório";

    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <div>
                    <TituloPrimario style={{textAlign: "left"}}>
                        {title}
                    </TituloPrimario>
                    <Teste
                        pdfUrl={pdfUrl}
                    />
                </div>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default LeitorRelatorio;