import { InputPesquisaStyle } from "./Style";
import InputPrimario from "../InputPrimario/InputPrimario";
import {LupaColorida} from "../../Icones/LupaColorida";

const InputPesquisa = () => {
    return (
        <InputPesquisaStyle>
            <InputPrimario
                className={"input"}
                placeholder={"Pesquisar"}
                value={""}
            />
            <div className={"lupa"}>
                <LupaColorida/>
            </div>
        </InputPesquisaStyle>
    );
}

export default InputPesquisa;