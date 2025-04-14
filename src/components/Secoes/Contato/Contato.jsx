import {ContatoStyle} from "./Style";
import Predio from "../../Icones/Predio";
import Telefone from "../../Icones/Telefone";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Newsletter from "../Newsletter/Newsletter";
import Formulario from "../Formulario/Formulario";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';

const Contato = () => {
    // Coordenadas do endereço (Av. Magalhães de Castro, 4800)
    // Estas são coordenadas aproximadas, você deve ajustar para o endereço exato
    const posicao = [-23.5942, -46.7244];

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
                    <MapContainer
                        center={posicao}
                        zoom={15}
                        style={{ height: '400px', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={posicao}>
                            <Popup>
                                Av. Magalhães de Castro, 4800 - 10º andar sala 104<br />
                                Jardim Panorama, São Paulo/SP<br />
                                CEP 05676-120
                            </Popup>
                        </Marker>
                    </MapContainer>
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