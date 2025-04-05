import { TextoCorridoStyle } from "./Style";

const TextoCorrido = ({ children, className, style, onClick}) => {
    return <TextoCorridoStyle className={className} style={style} onClick={onClick}>
        {children}</TextoCorridoStyle>;
}

export default TextoCorrido;