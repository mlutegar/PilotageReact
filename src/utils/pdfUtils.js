import * as pdfjsLib from 'pdfjs-dist';

// Configuração do worker para o pdfjs-dist - usa o worker local
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

console.log('pdfUtils carregado - versão pdfjs:', pdfjsLib.version);

/**
 * Extrai a primeira página de um PDF e retorna como uma imagem base64
 * @param {string} pdfUrl - URL do PDF
 * @param {number} scale - Escala de renderização (padrão: 2 para melhor qualidade)
 * @returns {Promise<string>} - Imagem em formato base64
 */
export const extractFirstPageAsImage = async (pdfUrl, scale = 2) => {
    console.log('[extractFirstPageAsImage] Iniciando extração para:', pdfUrl);

    try {
        // Carrega o documento PDF com configuração CORS
        console.log('[extractFirstPageAsImage] Carregando documento PDF...');
        const loadingTask = pdfjsLib.getDocument({
            url: pdfUrl,
            cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/cmaps/',
            cMapPacked: true,
        });

        const pdf = await loadingTask.promise;
        console.log('[extractFirstPageAsImage] PDF carregado. Total de páginas:', pdf.numPages);

        // Pega a primeira página
        console.log('[extractFirstPageAsImage] Obtendo primeira página...');
        const page = await pdf.getPage(1);
        console.log('[extractFirstPageAsImage] Primeira página obtida');

        // Define o viewport para renderização
        const viewport = page.getViewport({ scale });
        console.log('[extractFirstPageAsImage] Viewport configurado:', viewport.width, 'x', viewport.height);

        // Cria um canvas para renderizar a página
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Renderiza a página no canvas
        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };

        console.log('[extractFirstPageAsImage] Renderizando página...');
        await page.render(renderContext).promise;
        console.log('[extractFirstPageAsImage] Página renderizada com sucesso');

        // Converte o canvas para base64
        const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        console.log('[extractFirstPageAsImage] Imagem convertida para base64. Tamanho:', imageDataUrl.length, 'bytes');

        return imageDataUrl;
    } catch (error) {
        console.error('[extractFirstPageAsImage] Erro ao extrair primeira página do PDF:', error);
        console.error('[extractFirstPageAsImage] URL que falhou:', pdfUrl);
        throw error;
    }
};

/**
 * Pré-carrega as capas dos relatórios em cache
 * @param {Array} relatorios - Array de objetos de relatórios com propriedade guid (URL do PDF)
 * @returns {Promise<Object>} - Objeto com URLs dos PDFs como chaves e imagens base64 como valores
 */
export const preloadPdfCovers = async (relatorios) => {
    const coverCache = {};

    const promises = relatorios.map(async (relatorio) => {
        try {
            const pdfUrl = relatorio.guid;
            // Formata a URL para usar o domínio correto
            const urlParts = pdfUrl.split("/");
            const domain = "api.pilotage.com.br";
            const path = urlParts.slice(3).join("/");
            const formattedUrl = `https://${domain}/${path}`;

            const coverImage = await extractFirstPageAsImage(formattedUrl);
            coverCache[relatorio.guid] = coverImage;
        } catch (error) {
            console.error(`Erro ao carregar capa do relatório ${relatorio.post_title}:`, error);
            // Em caso de erro, não adiciona ao cache - o componente usará a imagem padrão
        }
    });

    await Promise.allSettled(promises);
    return coverCache;
};
