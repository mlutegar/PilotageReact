import {SidebarStyle} from "./Style";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import InputPesquisa from "../../Elementos/InputPesquisa/InputPesquisa";
import CaixaDeRelatorios from "../../Elementos/CaixaDeRelatorios/CaixaDeRelatorios";

const Sidebar = () => {
    return (
        <SidebarStyle>
            <TextoCorrido>
                <strong>Pesquisa</strong>
            </TextoCorrido>
            <InputPesquisa

            />
            <TextoCorrido>
                <strong>Relatórios Recentes</strong>
            </TextoCorrido>
            <CaixaDeRelatorios/>
            <TextoCorrido>
                <strong>Arquivo</strong>
            </TextoCorrido>
            <TextoCorrido>
                Mês
            </TextoCorrido>
            <InputPesquisa

            />
            <TextoCorrido>
                Ano
            </TextoCorrido>
            <InputPesquisa

            />
        </SidebarStyle>
    );
}

export default Sidebar;