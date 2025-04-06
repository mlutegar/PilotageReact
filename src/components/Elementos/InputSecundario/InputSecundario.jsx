import { InputSecundarioStyle } from "./Style";

const InputSecundario = ({placeholder, value, className, name, onChange}) => {
    return (
        <InputSecundarioStyle
            className={className}
            placeholder={placeholder}
            value={value || ""}
            name={name}
            onChange={onChange}
        />
    );
}

export default InputSecundario;