import { ComoInvestirStyle } from "./Style";
import TituloPrimario from "../../Elementos/Textos/TituloPrimario/TituloPrimario";
import Lupa from "../../Icones/Lupa";
import GraficoSeta from "../../Icones/GraficoSeta";
import Dinheiro from "../../Icones/Dinheiro";
import MaoAberta from "../../Icones/MaoAberta";
import CardComoInvestir from "../../Elementos/Cards/CardComoInvestir/CardComoInvestir";

const ComoInvestir = () => {
    return (
        <ComoInvestirStyle>
            <div className={"conteudo"}>
                <TituloPrimario>
                    Como é investir na Pilotage?
                </TituloPrimario>

                <CardComoInvestir
                    icone={<MaoAberta/>}
                    titulo={"Abra sua conta"}
                    conteudo={"Faça seu cadastro e abra sua conta de forma rápida e segura."}
                />

                <CardComoInvestir
                    icone={<Lupa/>}
                    titulo={"Escolha seu investimento"}
                    conteudo={"Navegue entre as opções de investimento e escolha a melhor para você."}
                />

                <CardComoInvestir
                    icone={<GraficoSeta/>}
                    titulo={"Acompanhe seus investimentos"}
                    conteudo={"Acompanhe seus investimentos e veja seu dinheiro render."}
                />

                <CardComoInvestir
                    icone={<Dinheiro/>}
                    titulo={"Resgate seu dinheiro"}
                    conteudo={"Resgate seu dinheiro a qualquer momento e sem burocracia."}
                />
            </div>
        </ComoInvestirStyle>
    );
}

export default ComoInvestir;