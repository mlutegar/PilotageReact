import {CanalDeDenunciasPageStyle} from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import Denuncias from "../Denuncias/Denuncias";

const CanalDeDenunciasPage = () => {
    return (
        <CanalDeDenunciasPageStyle>
            <div className={"titulo"}>
                <TituloPrimario>
                    <strong>Canal de Denúncias</strong>
                </TituloPrimario>
            </div>
                <div className={"conteudo"}>
                    <TextoCorrido className={"texto"}>
                        Este Canal de Denúncia destina-se à comunicação de irregularidades que possam caracterizar
                        infrações previstas no Código de Ética e Conduta da Pilotage Investimentos, crimes, fraudes,
                        entre outras situações. Ele pode ser utilizado por colaboradores, clientes e outras pessoas
                        que possuam informações que possam auxiliar no combate à corrupção, fraudes, lavagem de
                        dinheiro, outras práticas criminosas, discriminação ou aos desvios de conduta relacionados à
                        Pilotage Investimentos.<br/>

                        <br/>A análise do conteúdo das denúncias é realizada exclusivamente pela Pilotage Investimentos
                        e o anonimato é garantido ao denunciante. As informações fornecidas serão tratadas em estrita
                        confidencialidade e apenas compartilhadas para a devida identificação e análise do caso.<br/>

                        <br/>A informação fornecida poderá motivar o início de investigações internas, feitas por equipe
                        especializada, bem como de investigações por autoridades públicas e a tomada de medidas
                        judiciais cabíveis. A disseminação consciente de informação falsa terá duras consequências.
                    </TextoCorrido>
                    <TextoCorrido className={"obs"}>
                        <strong>ATENÇÃO: Este canal de denúncias NÃO é um canal de emergência!</strong>
                    </TextoCorrido>
                </div>
                <Denuncias />
        </CanalDeDenunciasPageStyle>
);
}

export default CanalDeDenunciasPage;