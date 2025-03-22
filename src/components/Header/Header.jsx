import { Link } from "react-router-dom";
import { Top } from "./Style";
import { Menu } from "./Style";
import { BotaoMenu } from "./Style";
import React from "react";

const Header = () => (
  <Top>
      <div className="logo-header">
          <div className="detalhe"/>
          <Link to="/"><img src="imagens/Logo.png" alt="Logo"/></Link>
      </div>

      <Menu>
          <BotaoMenu>
              <div className="hover"/>
              <Link to="/fotos">Home</Link>
          </BotaoMenu>
          <BotaoMenu>
              <div className="hover"/>
              <Link to="/atletas">Relatórios</Link>
          </BotaoMenu>
          <BotaoMenu>
              <div className="hover"/>
              <Link to="/atletas">Quem Somos</Link>
          </BotaoMenu>
          <BotaoMenu>
              <div className="hover"/>
              <Link to="/atletas">Contato</Link>
          </BotaoMenu>
      </Menu>
  </Top>
)

export default Header;