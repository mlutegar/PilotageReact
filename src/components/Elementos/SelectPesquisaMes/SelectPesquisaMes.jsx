import { SelectPesquisaMesStyle } from "./Style";
import Select from "../../Icones/Select";

const SelectPesquisaMes = ({ onChange }) => {
    return (
        <SelectPesquisaMesStyle>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Selecione um mês</option>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
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