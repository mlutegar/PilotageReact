import {CaixaDeRelatoriosStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";

const CaixaDeRelatorios = () => {
    // Pega os relatórios do localStorage e converte de volta para um array
    const relatorios = JSON.parse(localStorage.getItem("relatorios")) || [];
    console.log(relatorios);


    return (
        <CaixaDeRelatoriosStyle>
            {relatorios.slice(0, 5).map((relatorio, index) => (  // Pega apenas os 5 primeiros
                <TextoCorrido key={index} className={'item'}>
                    {relatorio.post_title}
                </TextoCorrido>
            ))}
        </CaixaDeRelatoriosStyle>
    );
}

export default CaixaDeRelatorios;
