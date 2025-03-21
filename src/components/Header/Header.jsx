import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
      <div className="logo-header">
          <div className="detalhe"/>
          <Link to="/"><img src="imagens/Logo.png" alt="Logo"/></Link>
      </div>

      <div className={"menu"}>
          <div className={"botao-menu"}>
              <div className="hover"/>
              <Link to="/fotos">Home</Link>
          </div>
          <div className={"botao-menu"}>
              <div className="hover"/>
              <Link to="/atletas">Relatórios</Link>
          </div>
          <div className={"botao-menu"}>
              <div className="hover"/>
              <Link to="/atletas">Quem Somos</Link>
          </div>
          <div className={"botao-menu"}>
              <div className="hover"/>
              <Link to="/atletas">Contato</Link>
          </div>
      </div>
  </Top>
)

export default Header;