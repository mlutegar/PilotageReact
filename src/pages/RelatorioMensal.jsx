import Base from "./Base"
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import relatorios from "../data/relatorios.json";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import CardRelatorio from "../components/Elementos/CardRelatorio/CardRelatorio";

const RelatorioMensal = () => {
    return (
        <Base>
            <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <div style={{width: "70%"}}>
                    <TituloPrimario style={{textAlign: "left"}}>
                        <strong>Relatórios Mensais</strong>
                    </TituloPrimario>

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

                    <CardRelatorio
                        titulo={"Relatório Mensal Pilotage - FEV / 2025"}
                        descricao={"Confira aqui o Relatório Mensal Pilotage do mês de Fevereiro de 2025 e veja nossas análises sobre\n" +
                            "                    economia internacional, economia brasileira e como estamos atuando neste período. A Pilotage publica\n" +
                            "                    mensalmente este relatório no site. Use a barra de controle para ampliar ou reduzir, virar páginas\n" +
                            "                    ou visualizar o relatório em tela cheia."}
                    />

                </div>

                <Sidebar/>
            </div>
        </Base>
    )
}

export default RelatorioMensal