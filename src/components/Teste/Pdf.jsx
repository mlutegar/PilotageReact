import React from 'react';

const Pdf = ({ pdfUrl }) => {
    return (
        <div className="pdf-container" style={{ width: '100%', height: '100%' }}>
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

export default Pdf;