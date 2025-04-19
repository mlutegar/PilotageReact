import {FooterPrimarioStyle} from "./Style";
import LogoFooter from "../../Icones/LogoFooter";
import ContatoInfoFooter from "../../Elementos/Cards/ContatoInfoFooter/ContatoInfoFooter";
import PredioClaro from "../../Icones/PredioClaro";
import TelefoneClaro from "../../Icones/TelefoneClaro";
import LinkClaro from "../../Icones/LinkClaro";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {SecoesContext} from "../../../pages/Home";


const FooterPrimario = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [ultimosRelatorios, setUltimosRelatorios] = useState([]);
    const { sobreNosRef, contatoRef } = useContext(SecoesContext);

    useEffect(() => {
        const relatoriosStorage = localStorage.getItem('relatorios');
        if (relatoriosStorage) {
            try {
                const relatorios = JSON.parse(relatoriosStorage);
                // Ordenar os relatórios por data (mais recente primeiro)
                const relatoriosOrdenados = [...relatorios].sort((a, b) =>
                    new Date(b.post_date) - new Date(a.post_date)
                );
                // Pegar apenas os 3 últimos
                setUltimosRelatorios(relatoriosOrdenados.slice(0, 3));
            } catch (error) {
                console.error("Erro ao carregar relatórios:", error);
                setUltimosRelatorios([]);
            }
        }
    }, []);

    const handleRelatorioClick = (relatorio, index) => {
        navigate('/leitor-relatorio', {
            state: {
                pdfUrl: relatorio.guid,
                title: relatorio.post_title,
                currentIndex: index
            }
        });
    };


    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR');
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

    const handlePanambyClick = () => {
        window.open('https://www.panambycapital.com.br', '_blank');
    }

    return (
        <FooterPrimarioStyle>
            <div className={'conteudo'}>
                <div className={'colunaEsquerda'}>
                    <div className={'logo'}>
                        <LogoFooter/>
                    </div>
                    <ContatoInfoFooter
                        icone={<PredioClaro/>}
                        texto={'Av. Magalhães de Castro, 4800 – 10ºandar sala 104 Jardim Panorama, São Paulo/SP CEP 05676-120'}
                    />
                    <ContatoInfoFooter
                        icone={<TelefoneClaro/>}
                        texto={'+55 (11) 3136 1493'}
                    />
                    <ContatoInfoFooter
                        icone={<LinkClaro/>}
                        texto={<Link to="https://www.linkedin.com/company/pilotage-wealth-management/">LinkedIn</Link>}
                    />
                </div>
                <div className={'colunaMeio'}>
                    <div className={'guia'}>
                        <h3>Guia</h3>
                        <Link to="/">Home</Link> {/* Link já presente */}
                        <Link to="/relatorio-mensal">Relatórios</Link> {/* Atualizado */}
                        <a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sobreNosRef);
                        }}>Quem Somos</a> {/* Alterado para scrollToSection */}
                        <a onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(contatoRef);
                        }}>Contato</a> {/* Alterado para scrollToSection */}
                    </div>
                    <div className={'relatorio'}>
                        <h3>Relatórios Mensais</h3>
                        {ultimosRelatorios.map((relatorio, index) => (
                            <a
                                key={index}
                                onClick={() => handleRelatorioClick(relatorio, index)}
                                style={{cursor: 'pointer'}}
                            >
                                {relatorio.post_title} {formatarData(relatorio.post_date)}
                            </a>
                        ))}
                    </div>
                </div>
                <div className={'colunaDireita'}>
                    <div className={'selo'}>
                        <img src={'imagens/selo.png'} alt={'Selo'}/>
                    </div>
                    <h3>PARCEIRO PILOTAGE</h3>
                    <div className={'panamby'} onClick={handlePanambyClick}>
                        <img src={'imagens/panamby.png'} alt={'Panamby'}/>
                    </div>
                </div>

            </div>
        </FooterPrimarioStyle>
    );
}

export default FooterPrimario;