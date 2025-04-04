import {useState} from 'react';  // Importe o useState
import {InputPesquisaStyle} from "./Style";
import InputPrimario from "../InputPrimario/InputPrimario";
import {LupaColorida} from "../../Icones/LupaColorida";

const InputPesquisa = ({onChange}) => {
    const [inputValue, setInputValue] = useState(""); // Crie o estado

    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);  // Verifique o valor do input
        onChange(e.target.value);  // Passa o valor para o componente pai
    };

    return (
        <InputPesquisaStyle>
            <InputPrimario
                className={"input"}
                placeholder={"Pesquisar"}
                value={inputValue}  // Passe o valor do estado
                onChange={handleChange}  // Defina o onChange
            />
            <div className={"lupa"}>
                <LupaColorida
                    className={"svg"}
                />
            </div>
        </InputPesquisaStyle>
    );
}

export default InputPesquisa;
