import {CaixaDeRelatoriosStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import {useNavigate} from "react-router-dom";

const CaixaDeRelatorios = () => {
    // Pega os relatórios do localStorage e converte de volta para um array
    const relatorios = JSON.parse(localStorage.getItem("relatorios")) || [];
    const navigate = useNavigate();

    const handleClick = (link, nome) => {
        // Pass the PDF URL as a state parameter when navigating
        navigate('/leitor-relatorio', {
            state: {
                pdfUrl: link,
                title: nome
            }
        });
    }


    return (
        <CaixaDeRelatoriosStyle>
            {relatorios.slice(0, 5).map((relatorio, index) => (  // Pega apenas os 5 primeiros
                <TextoCorrido key={index} className={'item'} onClick={() => handleClick(relatorio.guid, relatorio.post_title)}>
                        {relatorio.post_title}
                </TextoCorrido>
            ))}
        </CaixaDeRelatoriosStyle>
    );
}

export default CaixaDeRelatorios;
