import { NewsletterStyle } from "./Style";
import Logo from "../../Icones/Logo";
import InputPrimario from "../../Elementos/InputPrimario/InputPrimario";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";

const Newsletter = () => {
    return (
        <NewsletterStyle>
            <Logo/>
            <TituloPrimario className={"titulo"}>
                <strong>Gostaria de receber os Relatórios Mensais da Pilotage?</strong>
            </TituloPrimario>
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