import {CaixaDeRelatoriosStyle} from "./Style";
import relatorios from "../../../data/relatorios.json";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";

const CaixaDeRelatorios = () => {
    return (
        <CaixaDeRelatoriosStyle>
            {relatorios.map((relatorio, index) => (
                    <TextoCorrido>
                        {relatorio.nome}
                    </TextoCorrido>
                )
            )}
        </CaixaDeRelatoriosStyle>
    );
}

export default CaixaDeRelatorios;