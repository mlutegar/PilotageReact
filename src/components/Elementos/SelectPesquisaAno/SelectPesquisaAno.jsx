import { SelectPesquisaAnoStyle } from "./Style";
import Select from "../../Icones/Select";

const SelectPesquisaAno = ({onChange}) => {
    return (
        <SelectPesquisaAnoStyle>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Selecione um ano</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <div className={"lupa"}>
                <Select
                    className={"svg"}
                />
            </div>
        </SelectPesquisaAnoStyle>
    );
}

export default SelectPesquisaAno;