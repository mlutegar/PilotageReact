import {TituloPrimarioStyle} from "./Style";

const TituloPrimario = ({children, style}) => {
    return (
        <TituloPrimarioStyle style={style}>
            {children}
        </TituloPrimarioStyle>
    );
}

export default TituloPrimario;