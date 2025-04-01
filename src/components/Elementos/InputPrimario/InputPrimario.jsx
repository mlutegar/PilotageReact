import { InputPrimarioStyle } from "./Style";


const InputPrimario = ({placeholder, value, className}) => {
    return (
        <InputPrimarioStyle
            placeholder={placeholder}
            value={value}
            className={className}
        />
    );
}

export default InputPrimario;