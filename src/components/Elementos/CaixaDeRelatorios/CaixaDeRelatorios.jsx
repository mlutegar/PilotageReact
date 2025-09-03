import {CaixaDeRelatoriosStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import {useNavigate} from "react-router-dom";

const CaixaDeRelatorios = () => {
    // Pega os relatórios do localStorage e converte de volta para um array
    const relatorios = JSON.parse(localStorage.getItem("relatorios")) || [];
    const navigate = useNavigate();

    // Ordena por data (mais recentes primeiro) e pega os 5 últimos
    const relatoriosOrdenados = relatorios
        .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
        .slice(0, 5);

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
        // Encontra o índice correto no array ordenado completo
        const todosRelatoriosOrdenados = relatorios.sort((a, b) => new Date(b.post_date) - new Date(a.post_date));
        const index = todosRelatoriosOrdenados.findIndex(rel => rel.guid === link);

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
            {relatoriosOrdenados.map((relatorio, index) => (
                <TextoCorrido key={index} className={'item'} onClick={() => handleClick(relatorio.guid, relatorio.post_title)}>
                    {relatorio.post_title}
                </TextoCorrido>
            ))}
        </CaixaDeRelatoriosStyle>
    );
}

export default CaixaDeRelatorios;