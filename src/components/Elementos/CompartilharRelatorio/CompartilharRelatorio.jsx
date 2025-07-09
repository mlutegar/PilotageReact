import React, { useState } from "react";
import BotaoSecundario from "../Botoes/BotaoSecundario/BotaoSecundario";
import { CompartilharRelatorioStyle } from "./CompartilharRelatorioStyle";

const CompartilharRelatorio = ({ title, pdfUrl, mes, ano }) => {
    const [copied, setCopied] = useState(false);

    const shareUrl = window.location.href;
    const shareText = `Confira o ${title} da Pilotage - ${mes} de ${ano}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Erro ao copiar:', err);
        }
    };

    const handleWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        window.open(url, '_blank');
    };

    const handleEmail = () => {
        const subject = encodeURIComponent(shareText);
        const body = encodeURIComponent(`${shareText}\n\nAcesse aqui: ${shareUrl}`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
    };

    const handleLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
    };

    return (
        <CompartilharRelatorioStyle>
            <h3>Compartilhar Relatório</h3>
            <div className="share-buttons">
                <BotaoSecundario onClick={handleWhatsApp}>
                    WhatsApp
                </BotaoSecundario>
                <BotaoSecundario onClick={handleEmail}>
                    Email
                </BotaoSecundario>
                <BotaoSecundario onClick={handleLinkedIn}>
                    LinkedIn
                </BotaoSecundario>
                <BotaoSecundario onClick={handleCopyLink}>
                    {copied ? 'Copiado!' : 'Copiar Link'}
                </BotaoSecundario>
            </div>
        </CompartilharRelatorioStyle>
    );
};

export default CompartilharRelatorio;