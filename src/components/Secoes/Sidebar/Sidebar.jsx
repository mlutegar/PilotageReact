import {SidebarStyle} from "./Style";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import InputPesquisa from "../../Elementos/InputPesquisa/InputPesquisa";
import CaixaDeRelatorios from "../../Elementos/CaixaDeRelatorios/CaixaDeRelatorios";
import SelectPesquisa from "../../Elementos/SelectPesquisa/SelectPesquisa";

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
            <div className={'filtros'}>
                <div>
                    <TextoCorrido>
                        Mês
                    </TextoCorrido>
                    <SelectPesquisa

                    />
                </div>
                <div>
                    <TextoCorrido>
                        Ano
                    </TextoCorrido>
                    <SelectPesquisa

                    />
                </div>
            </div>
        </SidebarStyle>
    );
}

export default Sidebar;