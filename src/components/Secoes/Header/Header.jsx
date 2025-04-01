import { Link } from "react-router-dom";
import { Top, Menu, BotaoMenu } from "./Style";
import React from "react";

const Header = () => (
  <Top>
      <div className="logo-header">
          <img src="imagens/pilotage.jpg" alt="Logo"/>
      </div>
      <Menu>
          <BotaoMenu>
              <Link to="/">Home</Link>
          </BotaoMenu>
          <BotaoMenu>
              <Link to="/">Relatórios</Link>
          </BotaoMenu>
          <BotaoMenu>
              <Link to="/">Quem Somos</Link>
          </BotaoMenu>
          <BotaoMenu>
              <Link to="/">Contato</Link>
          </BotaoMenu>
      </Menu>
  </Top>
)

export default Header;