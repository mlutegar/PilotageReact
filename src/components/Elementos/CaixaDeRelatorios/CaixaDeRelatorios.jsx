import {CaixaDeRelatoriosStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import {useNavigate} from "react-router-dom";

const CaixaDeRelatorios = () => {
    // Pega os relatórios do localStorage e converte de volta para um array
    const relatorios = JSON.parse(localStorage.getItem("relatorios")) || [];
    const navigate = useNavigate();

    const createSlug = (titulo) => {
        return titulo
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
            .replace(/\s+/g, '-') // Substitui espaços por hífens
            .replace(/-+/g, '-') // Remove hífens duplicados
            .trim();
    };

    const handleClick = (link, titulo) => {
        const slug = createSlug(titulo);
        navigate(`/relatorio/${slug}`, {
            state: {
                pdfUrl: link,
                title: titulo,
                currentIndex: index
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
