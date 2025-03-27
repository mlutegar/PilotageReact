import { InputPrimarioStyle } from "./Style";

const InputPrimario = ({placeholder, value}) => {
    return (
        <InputPrimarioStyle
            placeholder={placeholder}
            value={value}
        />
    );
}

export default InputPrimario;