import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import relatorios from "../data/relatorios.json";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";

const RelatorioMensal = () => {
    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <div>
                    <TituloPrimario style={{textAlign: "left"}}>
                        <strong>Relatórios Mensais</strong>
                    </TituloPrimario>

                    <div style={{display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem"}}>
                        {relatorios.map((relatorio, index) => {
                            return (
                                <CardRelatorio
                                    key={index}
                                    imagem={relatorio.imagem}
                                    titulo={relatorio.nome}
                                    descricao={relatorio.descricao}
                                />
                            )
                        })}
                    </div>
                </div>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default RelatorioMensal