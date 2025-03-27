import { TextoCorridoStyle } from "./Style";

const TextoCorrido = ({ children, className, style }) => {
    return <TextoCorridoStyle className={className} style={style}>{children}</TextoCorridoStyle>;
}

export default TextoCorrido;