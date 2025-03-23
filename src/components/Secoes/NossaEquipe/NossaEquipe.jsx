import { NossaEquipeStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import CardNossaEquipe from "../../Elementos/Cards/CardNossaEquipe/CardNossaEquipe";

const NossaEquipe = () => {
    return (
        <NossaEquipeStyle>
            <div className={'conteudo'}>
                <TituloPrimario>
                    Nossa Equipe
                </TituloPrimario>
                <TextoCorrido>
                    Conheça os profissionais que cuidam dos seus investimentos
                </TextoCorrido>

                <CardNossaEquipe
                    foto={"imagens/equipe/reinaldo.png"}
                    nome={'Reinaldo Le GRAZIE'}
                    curriculo={''}
                    urls={''}
                />

                <CardNossaEquipe
                    foto={"imagens/equipe/marcelo.png"}
                    nome={'Marcelo SADDI Castro'}
                    curriculo={''}
                    urls={''}
                />

                <CardNossaEquipe
                    foto={"imagens/equipe/alexandre.png"}
                    nome={'Alexandre França FRAGA'}
                    curriculo={''}
                    urls={''}
                />
            </div>
        </NossaEquipeStyle>
    );
}

export default NossaEquipe;