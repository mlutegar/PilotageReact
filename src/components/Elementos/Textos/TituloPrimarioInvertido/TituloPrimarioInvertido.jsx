import {TituloPrimarioInvertidoStyle} from "./Style";

const TituloPrimarioInvertido = ({children, className}) => {
    return (
        <TituloPrimarioInvertidoStyle className={className}>
            {children}
        </TituloPrimarioInvertidoStyle>
    );
}

export default TituloPrimarioInvertido;