import { SelectPesquisaStyle } from "./Style";
import Select from "../../Icones/Select";

const SelectPesquisa = () => {
    return (
        <SelectPesquisaStyle>
            <select>

            </select>
            <div className={"lupa"}>
                <Select
                    className={"svg"}
                />
            </div>
        </SelectPesquisaStyle>
    );
}

export default SelectPesquisa;