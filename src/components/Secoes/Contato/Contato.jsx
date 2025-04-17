import {ContatoStyle} from "./Style";
import Predio from "../../Icones/Predio";
import Telefone from "../../Icones/Telefone";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Newsletter from "../Newsletter/Newsletter";
import Formulario from "../Formulario/Formulario";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import { Map, Marker, Overlay } from 'pigeon-maps';
import { useState } from 'react';
import { useEffect } from 'react';

const Contato = () => {
    // Coordenadas do endereço (Av. Magalhães de Castro, 4800)
    // Estas são coordenadas aproximadas, você deve ajustar para o endereço exato
    const posicao = [-23.5942, -46.7244];
    const [showOverlay, setShowOverlay] = useState(false);

    // Carregando o CSS do Leaflet no componente
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <ContatoStyle>
            <TituloPrimario>
                <strong>Contato</strong>
            </TituloPrimario>
            <div className={'secao'}>
                <div className={'mapa'}>
                    <Map
                        height={400}
                        defaultCenter={posicao}
                        defaultZoom={15}
                    >
                        <Marker
                            width={50}
                            anchor={posicao}
                            onClick={() => setShowOverlay(!showOverlay)}
                        />
                        {showOverlay && (
                            <Overlay anchor={posicao} offset={[120, 79]}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    Av. Magalhães de Castro, 4800 - 10º andar sala 104<br />
                                    Jardim Panorama, São Paulo/SP<br />
                                    CEP 05676-120
                                </div>
                            </Overlay>
                        )}
                    </Map>
                </div>
                <div className={'info'}>
                    <div className={'info-item'}>
                        <TextoCorrido>
                            <strong> Endereço </strong>
                        </TextoCorrido>
                        <div className={"descricao"}>
                            <Predio/>
                            <TextoCorrido className={"endereco"}>
                                Av. Magalhães de Castro, 4800 - 10º andar sala 104 Jardim Panorama, São Paulo/SP CEP
                                05676-120
                            </TextoCorrido>
                        </div>
                    </div>
                    <div className={'info-item'}>
                        <TextoCorrido>
                            <strong>Telefone</strong>
                        </TextoCorrido>
                        <div className={"descricao"}>
                            <Telefone/>
                            <TextoCorrido>
                                +55 (11) 3136 1493
                            </TextoCorrido>
                        </div>
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