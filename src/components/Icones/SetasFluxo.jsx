const SetasFluxo = () => (
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
            {/* Seta da Análise Inicial para Análise do Investidor */}
            <line x1="200" y1="150" x2="500" y2="150" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* Seta da Análise do Investidor para Escolha dos Ativos */}
            <line x1="500" y1="150" x2="500" y2="300" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* Seta da Escolha dos Ativos para Monitoramento Contínuo */}
            <line x1="500" y1="300" x2="200" y2="300" stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)" />

            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
            </defs>
        </svg>
);
export default SetasFluxo;