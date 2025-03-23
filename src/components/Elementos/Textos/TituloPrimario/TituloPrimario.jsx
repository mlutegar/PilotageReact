import {TituloPrimarioStyle} from "./Style";

const TituloPrimario = ({children}) => {
    return (
        <TituloPrimarioStyle>
            {children}
        </TituloPrimarioStyle>
    );
}

export default TituloPrimario;