import {TituloPrimarioStyle} from "./Style";

const TituloPrimario = ({children, style, className}) => {
    return (
        <TituloPrimarioStyle className={className} style={style}>
            {children}
        </TituloPrimarioStyle>
    );
}

export default TituloPrimario;