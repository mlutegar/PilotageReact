import { Link } from "react-router-dom";
import { Top, Menu, BotaoMenu } from "./Style";
import React from "react";

const Header = () => (
  <Top>
      <div className="logo-header">
          <Link to="/"><img src="imagens/pilotage.jpg" alt="Logo"/></Link>
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