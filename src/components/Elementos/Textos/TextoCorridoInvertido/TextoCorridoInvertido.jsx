import { TextoCorridoInvertidoStyle } from "./Style";

const TextoCorridoInvertido = ({ children, className }) => {
    return <TextoCorridoInvertidoStyle className={className}>{children}</TextoCorridoInvertidoStyle>;
}

export default TextoCorridoInvertido;