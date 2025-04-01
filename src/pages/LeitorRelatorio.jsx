import Base from "./Base"
import Teste from "../components/Teste/Teste";

const LeitorRelatorio = () => {
    return (
        <Base>
            <Teste
                pdfUrl={"https://pilotage.com.br/home/wp-content/uploads/2025/03/Relatorio-mensal-Fevereiro-2025.pdf"}
            />
        </Base>
    )
}

export default LeitorRelatorio