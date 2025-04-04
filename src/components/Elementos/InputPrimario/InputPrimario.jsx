import { InputPrimarioStyle } from "./Style";

const InputPrimario = ({placeholder, value, className, onChange}) => {
    return (
        <InputPrimarioStyle
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={onChange}  // Adicione isso aqui
        />
    );
}

export default InputPrimario;