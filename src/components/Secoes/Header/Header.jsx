import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Top, Menu, BotaoMenu } from "./Style";
import {SecoesContext} from "../../../pages/Home";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Acessando as refs através do contexto
    const { sobreNosRef, contatoRef } = useContext(SecoesContext);

    const handleLogoClick = () => {
        navigate("/");
    };

    const scrollToSection = (ref) => {
        if (isHomePage && ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        } else {
            // Se não estiver na página inicial, primeiro navegue para Home e então role para a seção
            navigate("/");
            // Precisamos esperar a navegação ser concluída antes de tentar rolar
            setTimeout(() => {
                if (ref && ref.current) {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    return (
        <>
            <Top>
                <div className="logo-header" onClick={handleLogoClick}>
                    <img src="imagens/pilotage.jpg" alt="Logo" />
                </div>
                <Menu>
                    <BotaoMenu>
                        <Link to="/">Home</Link>
                    </BotaoMenu>
                    <BotaoMenu>
                        <Link to="/relatorio-mensal">Relatórios</Link>
                    </BotaoMenu>
                    <BotaoMenu>
                        <a onClick={(e) => {e.preventDefault(); scrollToSection(sobreNosRef);}}>
                            Sobre Nós
                        </a>
                    </BotaoMenu>
                    <BotaoMenu>
                        <a onClick={(e) => {e.preventDefault(); scrollToSection(contatoRef);}}>
                            Contato
                        </a>
                    </BotaoMenu>
                </Menu>
            </Top>
        </>
    );
};

export default Header;