import { InputSecundarioStyle } from "./Style";

const InputSecundario = ({placeholder, value, className}) => {
    return (
        <InputSecundarioStyle className={className}
            placeholder={placeholder}
            value={value}
        />
    );
}

export default InputSecundario;