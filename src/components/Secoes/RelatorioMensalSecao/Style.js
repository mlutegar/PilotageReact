import styled from "styled-components"

export const RelatorioMensalSecaoStyle = styled.section`
    background: #003560;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    @media screen and (max-width: 768px) {
        padding: 2rem 0 !important;
    }
    
    .titulo{
        @media (max-width: 768px) {
            padding-bottom: 0;
        }
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        max-width: 1440px;
        margin: 0 auto;
        overflow: hidden;
    }
    
    .cards{
        display: flex;
        justify-content: center;
        gap: 5rem;
        margin: 5rem 0;
    }
    
    .principal{
        transform: scale(1.2);
        
        @media (max-width: 768px) {
            transform: scale(1);
        }
    }
    
    .botoes{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    
    .secundario{
        @media (max-width: 768px) {
            display: none;
        }
    }
`
