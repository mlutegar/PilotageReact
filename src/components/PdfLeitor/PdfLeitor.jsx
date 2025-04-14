import React, {useEffect, useState} from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.min.mjs`;

const PdfLeitor = ({ file }) => {
    const [numPages, setNumPages] = useState(0);
    const [pdfError, setPdfError] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPdfError('');
    }

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        setNumPages(null);
        setPdfError('');
    }, [file]);

    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            {pdfError ? (
                <div style={{ color: 'red' }}>{pdfError}</div>
            ) : (
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div>Carregando PDF…</div>}
                    noData={<div>PDF não encontrado.</div>}
                >
                    {numPages && (
                        <HTMLFlipBook
                            className="flipbook-container"
                            width={isMobile ? 105 : 210}
                            height={isMobile ? 149 : 297}
                            size="stretch"                   // ajusta ao container
                            minWidth={200}
                            maxWidth={900}
                            minHeight={300}
                            maxHeight={1200}
                            maxShadowOpacity={0.5}           // intensidade da sombra
                            drawShadow={true}                // desenha sombra para efeito 3D
                            showCover={true}                 // primeira página como capa
                            showPageCorners={true}           // indica cantos viráveis
                            mobileScrollSupport={true}       // permite scroll no mobile
                            clickEventForward={true}         // virar ao clicar à frente
                            clickEventBackward={true}        // virar ao clicar atrás
                            swipeDistance={40}               // distância mínima de swipe
                            flippingTime={600}               // duração do flip em ms
                            usePortrait={isMobile}           // modo retrato em mobile
                            startPage={currentPage}          // página inicial controlada
                            renderOnlyPageLengthChange
                            onInit={(e) => console.log('Flipbook iniciado:', e)}
                            onFlip={(e) => {
                                console.log('Virou para a página', e.data);
                                setCurrentPage(e.data);
                            }}
                            onChangeOrientation={(orientation) =>
                                console.log('Orientação mudou para', orientation)
                            }
                        >
                            {Array.from({ length: numPages }, (_, index) => (
                                <div key={index} className="page">
                                    <Page
                                        pageNumber={index + 1}
                                        width={isMobile ? 300 : 410}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        onRenderError={(err) =>
                                            console.error(`Erro renderizando página ${index + 1}:`, err)
                                        }
                                    />
                                </div>
                            ))}
                        </HTMLFlipBook>
                    )}
                </Document>
            )}
        </div>
    );
};

export default PdfLeitor;