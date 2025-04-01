import { DenunciasStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import InputPrimario from "../../Elementos/InputPrimario/InputPrimario";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import InputSecundario from "../../Elementos/InputSecundario/InputSecundario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";

const Denuncias = () => {
    return (
        <DenunciasStyle>
            <TituloPrimario className={"titulo"}>
                <strong>FORMULÁRIO PARA ENVIO DE DENÚNCIAS</strong>
            </TituloPrimario>

            <TextoCorrido className={"texto"}>
                Para enviar sua denúncia use o formulário abaixo.  A sua identificação com nome e endereço de email é opcional, caso não queira se identificar deixe estes campos em branco e preencha somente o campo de mensagem com o texto de denúncia e envie
            </TextoCorrido>

            <div className={"inputs"}>
                <InputSecundario className={"form"}
                    placeholder={"Nome completo (opcional)"}
                />
            </div>

            <div className={"inputs"}>
                <InputSecundario className={"form"}
                    placeholder={"E-mail (opcional)"}
                />
            </div>

            <div className={"inputs"}>
                <InputSecundario className={"form-mensagem"}
                    placeholder={"Mensagem"}
                />
            </div>

            <BotaoSecundario>
                Enviar
            </BotaoSecundario>
        </DenunciasStyle>
    );
}

export default Denuncias;