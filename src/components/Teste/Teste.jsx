import React from 'react';

const Teste = ({ pdfUrl }) => {
    return (
        <div className="pdf-container" style={{ width: '100%', height: '600px' }}>
            <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                title="PDF Viewer"
                frameBorder="0"
            />
        </div>
    );
};

export default Teste;