import React, {useContext, useState} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {Top, Menu, BotaoMenu, MenuMobile, HamburgerButton} from "./Style";
import {SecoesContext} from "../../../pages/Home";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [menuOpen, setMenuOpen] = useState(false);

    // Acessando as refs através do contexto
    const {sobreNosRef, contatoRef} = useContext(SecoesContext);

    const handleLogoClick = () => {
        navigate("/");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // No Header.jsx, modifique o scrollToSection:
    const scrollToSection = (sectionName) => {
        if (isHomePage) {
            const ref = {sobreNos: sobreNosRef, contato: contatoRef}[sectionName];
            if (ref && ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(`/?section=${sectionName}`);
        }
        setMenuOpen(false);
    };


    return (
        <Top>
            <div className="logo-header" onClick={handleLogoClick}>
                <img src="imagens/pilotage.jpg" alt="Logo"/>
            </div>

            {/* Menu Desktop */}
            <Menu>
                <BotaoMenu>
                    <Link to="/">Home</Link>
                </BotaoMenu>
                <BotaoMenu>
                    <Link to="/relatorio-mensal">Relatórios</Link>
                </BotaoMenu>
                <BotaoMenu>
                    <a onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contato');
                    }}>
                        Contato
                    </a>
                </BotaoMenu>
                <BotaoMenu>
                    <a onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('sobreNos');
                    }}>
                        Sobre Nós
                    </a>
                </BotaoMenu>

            </Menu>

            {/* Botão Hamburguer */}
            <HamburgerButton onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>

            {/* Menu Mobile */}
            <MenuMobile isopen={menuOpen}>
                <BotaoMenu>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </BotaoMenu>
                <BotaoMenu>
                    <Link to="/relatorio-mensal" onClick={() => setMenuOpen(false)}>Relatórios</Link>
                </BotaoMenu>
                <BotaoMenu>
                    <a onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('sobreNos');
                    }}>
                        Sobre Nós
                    </a>
                </BotaoMenu>
                <BotaoMenu>
                    <a onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contato');
                    }}>
                        Contato
                    </a>
                </BotaoMenu>
            </MenuMobile>
        </Top>
    );
};

export default Header;