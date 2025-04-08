import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

// Configurar o worker do pdfjs (necessário para o react-pdf funcionar)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.min.mjs`;

const Teste = () => {
    const [numPages, setNumPages] = useState(null); // Armazena o número de páginas do PDF
    const [pdfFile, setPdfFile] = useState(null);   // Armazena o arquivo PDF selecionado

    // Função para lidar com a seleção do arquivo PDF
    const onFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPdfFile(file);
        }
    };

    // Função chamada quando o PDF é carregado com sucesso
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <>
            {/* Input para o usuário selecionar o PDF */}
            <input
                type="file"
                accept="application/pdf"
                onChange={onFileChange}
            />

            {/* Renderiza o PDF com o efeito de virada de página */}
            {pdfFile && (
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <HTMLFlipBook width={300} height={500}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <div
                                key={`page_${index + 1}`}
                                style={{ width: "300px", height: "500px" }}
                            >
                                <Page pageNumber={index + 1} width={300} />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </Document>
            )}
        </>
    );
};

export default Teste;
