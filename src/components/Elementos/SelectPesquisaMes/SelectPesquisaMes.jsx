import { SelectPesquisaMesStyle } from "./Style";
import Select from "../../Icones/Select";

const SelectPesquisaMes = () => {
    return (
        <SelectPesquisaMesStyle>
            <select>
                <option value="">Selecione um mês</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            <div className={"lupa"}>
                <Select
                    className={"svg"}
                />
            </div>
        </SelectPesquisaMesStyle>
    );
}

export default SelectPesquisaMes;