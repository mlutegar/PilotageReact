import {CardRelatorioStyle} from "./Style";
import TextoCorrido from "../Textos/TextoCorrido/TextoCorrido";
import BotaoSecundario from "../Botoes/BotaoSecundario/BotaoSecundario";
import {useNavigate} from "react-router-dom";

const CardRelatorio = ({titulo, descricao, link, index}) => {
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
        <CardRelatorioStyle>
            <div>
                <img
                    src={"imagens/relatorio/default.png"}
                />
            </div>

            <div className={'conteudo'}>
                <TextoCorrido>
                    <strong>{titulo}</strong>
                </TextoCorrido>

                <TextoCorrido>
                    {descricao}
                </TextoCorrido>

                <div className={'linha'}>

                </div>

                <BotaoSecundario
                    onClick={handleClick}
                >
                    Saiba Mais
                </BotaoSecundario>
            </div>

        </CardRelatorioStyle>
    );
}

export default CardRelatorio;