import { NewsletterStyle } from "./Style";
import Logo from "../../Icones/Logo";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import InputPrimario from "../../Elementos/InputPrimario/InputPrimario";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";

const Newsletter = () => {
    return (
        <NewsletterStyle>
            <Logo/>
            <TextoCorrido>
                <strong>Gostaria de receber os Relatórios Mensais da Pilotage</strong>
            </TextoCorrido>
            <InputPrimario
                placeholder="Seu e-mail"
                value=""
            />
            <BotaoSecundario>
                Cadastrar
            </BotaoSecundario>
        </NewsletterStyle>
    );
}

export default Newsletter;