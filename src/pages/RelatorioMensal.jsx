import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";
import { useContext } from "react";
import {RelatorioContext} from "../contexts/RelatorioContext";

const RelatorioMensal = () => {
    const { relatorios, loading } = useContext(RelatorioContext);

    // Ordena os relatórios pela data (do mais recente para o mais antigo)
    const relatoriosOrdenados = [...relatorios].sort((a, b) =>
        new Date(b.post_date) - new Date(a.post_date)
    );

    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <div>
                    <TituloPrimario style={{textAlign: "left"}}>
                        <strong>Relatórios Mensais</strong>
                    </TituloPrimario>

                    {loading ? (
                        <div>Carregando relatórios...</div>
                    ) : (
                        <div style={{display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem"}}>
                            {relatoriosOrdenados.map((relatorio, index) => {
                                return (
                                    <CardRelatorio
                                        key={index}
                                        titulo={relatorio.post_title}
                                        descricao={relatorio.post_excerpt || relatorio.post_content.substring(0, 150) + '...'}
                                        link={relatorio.guid}
                                    />
                                )
                            })}
                        </div>
                    )}
                </div>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default RelatorioMensal