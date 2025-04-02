import Base from "./Base"
import Teste from "../components/Teste/Teste";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";

const LeitorRelatorio = () => {
    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <div>
                    <tituloPrimario style={{textAlign: "left"}}>
                        Leitor de equipamentos
                    </tituloPrimario>
                    <Teste
                        pdfUrl={"https://pilotage.com.br/home/wp-content/uploads/2025/03/Relatorio-mensal-Fevereiro-2025.pdf"}
                    />
                </div>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default LeitorRelatorio