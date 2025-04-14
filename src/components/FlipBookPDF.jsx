import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// configura o worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const FlipBookPDF = ({ file }) => {
    const [numPages, setNumPages] = useState(0);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ width: '800px', margin: '0 auto' }}>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div>Carregando PDF…</div>}
            >
                {numPages > 0 && (
                    <HTMLFlipBook
                        width={500}
                        height={1200}
                        size="stretch"
                        minWidth={200}
                        maxWidth={500}
                        minHeight={400}
                        maxHeight={1200}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                    >
                        {Array.from({ length: numPages }, (_, index) => (
                            <div key={index} className="page">
                                <Page
                                    pageNumber={index + 1}
                                    width={500}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
                )}
            </Document>
        </div>
    );
};

export default FlipBookPDF;
