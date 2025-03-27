import {ContatoStyle} from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import Predio from "../../Icones/Predio";
import Telefone from "../../Icones/Telefone";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Newsletter from "../Newsletter/Newsletter";
import Formulario from "../Formulario/Formulario";

const Contato = () => {
    return (
        <ContatoStyle>
            <TituloPrimario>
                <strong>Contato</strong>
            </TituloPrimario>
            <div className={'secao'}>
                <div className={'mapa'}>
                    <img src={'imagens/mapa/default.png'} alt={'Mapa'}/>
                </div>
                <div className={'info'}>
                    <div className={'info-item'}>
                        <TextoCorrido>
                            <strong> Endereço </strong>
                        </TextoCorrido>
                        <Predio/>
                        <TextoCorrido>
                            Av, Magalhães de Castro, 4800 - 10º andar sala 104 Jardim Panorama, São Paulo/SP CEP
                            05676-120

                        </TextoCorrido>
                    </div>
                    <div className={'info-item'}>
                        <TextoCorrido>
                            <strong>Telefone</strong>
                        </TextoCorrido>
                        <Telefone/>
                        <TextoCorrido>
                            +55 (11) 3136 1493
                        </TextoCorrido>

                    </div>
                </div>
            </div>
            <div className={'forms'}>
                <Newsletter/>
                <Formulario/>
            </div>
        </ContatoStyle>
    );
}

export default Contato;