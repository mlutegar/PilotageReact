import {SidebarStyle} from "./Style";
import TextoCorrido from "../../Elementos/Textos/TextoCorrido/TextoCorrido";
import InputPesquisa from "../../Elementos/InputPesquisa/InputPesquisa";
import CaixaDeRelatorios from "../../Elementos/CaixaDeRelatorios/CaixaDeRelatorios";
import SelectPesquisaMes from "../../Elementos/SelectPesquisaMes/SelectPesquisaMes";
import SelectPesquisaAno from "../../Elementos/SelectPesquisaAno/SelectPesquisaAno";

const Sidebar = ({setInputValue, setSelectedAno, setSelectedMes}) => {
    return (
        <SidebarStyle>
            <TextoCorrido>
                <strong>Pesquisa</strong>
            </TextoCorrido>
            <InputPesquisa onChange={setInputValue} />
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
                    <SelectPesquisaMes
                        onChange={setSelectedMes}
                    />
                </div>
                <div>
                    <TextoCorrido>
                        Ano
                    </TextoCorrido>
                    <SelectPesquisaAno
                        onChange={setSelectedAno}
                    />
                </div>
            </div>
        </SidebarStyle>
    );
}

export default Sidebar;