import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Base from "./Base";
import Sidebar from "../components/Secoes/Sidebar/Sidebar";
import TituloPrimario from "../components/Elementos/Textos/TituloPrimario/TituloPrimario";
import TextoCorrido from "../components/Elementos/Textos/TextoCorrido/TextoCorrido";
import { Botaoseta } from "../components/Icones/Botaoseta";
import styled from "styled-components";
import PdfLeitor from "../components/PdfLeitor/PdfLeitor";
import BotaoSecundario from "../components/Elementos/Botoes/BotaoSecundario/BotaoSecundario";
import Pdf from "../components/Teste/Pdf";

export const LeitorRelatorioStyle = styled.div`
    .desktop{
        display: flex;
        
        @media (max-width: 768px) {
            display: none;
        }
    }
    
    .mobile{
        display: none;
        
        @media (max-width: 768px) {
            display: flex;
        }
    }
    
    .page.stf__item.--hard.--left.--simple, .page.stf__item.--soft.--right.--simple{
        width: 50% !important;
    }

    canvas.react-pdf__Page__canvas{
        width: 100% !important;
        height: auto !important;""
    }
    
    .conteudo {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-right: 2.69rem;

        @media (max-width: 768px) {
            margin-right: 0;
            width: 100%;
            align-items: center;
            text-align: center !important;
        }
    }

    .titulo {
        text-align: left;
        padding: 0;

        @media (max-width: 768px) {
            text-align: center !important;
        }
    }
    
    .mobile{
        @media (max-width: 1024px) {
            display: none;
        }
    }
`

const LeitorRelatorio = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pdfUrlCerto, setPdfUrlCerto] = useState("");

  // pega a URL, ou usa uma default
  const pdfUrl =
    location.state?.pdfUrl ||
    "https://pilotage.com.br/home/wp-content/uploads/2025/03/Relatorio-mensal-Fevereiro-2025.pdf";
  const title = location.state?.title || "Relatório";
  const mes = location.state?.mes || "Janeiro";
  const ano = location.state?.ano || "2025";
  const currentIndex = location.state?.currentIndex || 0;

  // estados para validação
  const [checking, setChecking] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
      formatandoOdominioDaUrl(pdfUrl);

    // 1) URL presente?
    if (!pdfUrlCerto) {
      setErrorMsg("URL do PDF não foi fornecida.");
      setChecking(false);
      return;
    }

    // 2) extensão .pdf?
    if (!pdfUrlCerto.toLowerCase().endsWith(".pdf")) {
      setErrorMsg("O link informado não aponta para um arquivo .pdf.");
      setChecking(false);
      return;
    }

    // 3) (opcional) HEAD request para checar Content-Type
    fetch(pdfUrlCerto, { method: "HEAD" })
      .then((res) => {
        const ct = res.headers.get("content-type") || "";
        if (!res.ok || !ct.includes("application/pdf")) {
          throw new Error("Não é PDF");
        }
        setErrorMsg("");
      })
      .catch(() => {
        setErrorMsg(
          "Não foi possível verificar o arquivo PDF. Verifique a URL ou tente novamente."
        );
      })
      .finally(() => setChecking(false));


  }, [pdfUrlCerto]);

  // navegação entre relatórios (igual ao seu código)
  const storedData = localStorage.getItem("relatorios");
  const relatorios = storedData ? JSON.parse(storedData) : [];
  const relatoriosOrdenados = relatorios.sort(
    (a, b) => new Date(b.post_date) - new Date(a.post_date)
  );

  const handleAnterior = () => {
    if (currentIndex < relatoriosOrdenados.length - 1) {
      const newIndex = currentIndex + 1;
      const novoRelatorio = relatoriosOrdenados[newIndex];
      window.scrollTo(0, 0);
      navigate("/leitor-relatorio", {
        state: {
          pdfUrl: novoRelatorio.guid,
          title: novoRelatorio.post_title,
          currentIndex: newIndex,
        },
      });
    }
  };

  const handleAvancar = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const novoRelatorio = relatoriosOrdenados[newIndex];
      window.scrollTo(0, 0);
      navigate("/leitor-relatorio", {
        state: {
          pdfUrl: novoRelatorio.guid,
          title: novoRelatorio.post_title,
          currentIndex: newIndex,
        },
      });
    }
  };

  const formatandoOdominioDaUrl = (url) => {
    const urlParts = url.split("/");
    const domain = "api.pilotage.com.br";
    const path = urlParts.slice(3).join("/");
    setPdfUrlCerto(`https://${domain}/${path}`);
  }

  return (
    <Base>
      <LeitorRelatorioStyle>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "2.69rem",
            marginBottom: "4.69rem",
          }}
        >
          <div className={"conteudo"}>
            <TituloPrimario className={"titulo"}>
              <strong> {title} </strong>
            </TituloPrimario>

                        <TextoCorrido>
                            Confira aqui o Relatório Mensal Pilotage do mês de {mes} de {ano} e veja nossas análises
                            sobre
                            economia internacional, economia brasileira e como estamos atuando neste período.
                            A Pilotage publica mensalmente este relatório no site.
                            Use a barra de controle para ampliar ou reduzir, virar páginas ou visualizar o relatório em
                            tela
                            cheia.
                        </TextoCorrido>

            {/* Renderização condicional de loading / erro / reader */}
            {checking ? (
              <div>Verificando PDF…</div>
            ) : errorMsg ? (
              <div style={{ color: "red" }}>{errorMsg}</div>
            ) : (
                <>
                    <div className={'desktop'}>
                        <PdfLeitor file={pdfUrlCerto}/>
                    </div>

                    <div className={'mobile'}>
                        <Pdf pdfUrl={pdfUrlCerto}/>
                    </div>

                </>
            )}

              <BotaoSecundario onClick={() => window.open(pdfUrlCerto, "_blank")}>
                  Baixar PDF
              </BotaoSecundario>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid black",
                paddingTop: "1rem",
              }}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  background: "transparent",
                }}
                onClick={handleAnterior}
              >
                <Botaoseta direction="left" />
                <span>Anterior</span>
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  background: "transparent",
                }}
                onClick={handleAvancar}
              >
                <span>Avançar</span>
                <Botaoseta direction="right" />
              </button>
            </div>
          </div>

          <Sidebar
            className={'mobile'}
          />
        </div>
      </LeitorRelatorioStyle>
    </Base>
  );
};

export default LeitorRelatorio;
