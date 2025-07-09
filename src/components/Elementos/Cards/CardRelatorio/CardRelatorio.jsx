import { CardRelatorioStyle } from "./Style";
import TextoCorridoInvertido from "../../Textos/TextoCorridoInvertido/TextoCorridoInvertido";
import { useNavigate } from "react-router-dom";

const CardRelatorio = ({ data, nome, link, className, index }) => {
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

    const handleClick = () => {
        const slug = createSlug(nome);
        navigate(`/relatorio/${slug}`, {
            state: {
                pdfUrl: link,
                title: nome,
                currentIndex: index
            }
        });
    }

    return (
        <CardRelatorioStyle className={className} onClick={handleClick}>
            <TextoCorridoInvertido className={'nome'}>
                {nome}
            </TextoCorridoInvertido>
        </CardRelatorioStyle>
    );
}

export default CardRelatorio;