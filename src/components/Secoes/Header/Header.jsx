import {Link, useNavigate} from "react-router-dom";
import {Top, Menu, BotaoMenu} from "./Style";
import React from "react";

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    }

    return (
        <>
            <Top>
                <div className="logo-header" onClick={handleLogoClick}>
                    <img src="imagens/pilotage.jpg" alt="Logo"/>
                </div>
                <Menu>
                    <BotaoMenu>
                        <Link to="/">Home</Link>
                    </BotaoMenu>
                    <BotaoMenu>
                        <Link to='/relatorio-mensal'>Relatórios</Link>
                    </BotaoMenu>
                    <BotaoMenu>
                        <a href="#sobre-nos">Sobre Nós</a>
                    </BotaoMenu>
                    <BotaoMenu>
                        <a href="#contato">Contato</a>
                    </BotaoMenu>
                </Menu>
            </Top>
        </>
    )
}

export default Header;