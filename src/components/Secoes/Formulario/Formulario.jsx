import { FormularioStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import InputPrimario from "../../Elementos/InputPrimario/InputPrimario";
import BotaoSecundario from "../../Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import InputSecundario from "../../Elementos/InputSecundario/InputSecundario";

const Formulario = () => {
    return (
        <FormularioStyle>
            <TituloPrimario>
                <strong>Formulário de Cotato</strong>
            </TituloPrimario>

            <div className={"inputs"}>
                <InputSecundario
                    placeholder={"Nome completo"}
                />
                <InputSecundario
                    placeholder={"E-mail"}
                />
            </div>

            <div className={"inputs"}>
                <InputSecundario
                    placeholder={"Telefone"}
                />
                <InputSecundario
                    placeholder={"Cidade"}
                />
            </div>

            <div>

            </div>

            <BotaoSecundario>
                Enviar
            </BotaoSecundario>
        </FormularioStyle>
    );
}

export default Formulario;