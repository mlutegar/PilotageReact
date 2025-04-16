import styled from "styled-components"

export const GestaoRecursosStyle = styled.section`
    .conteudo{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
        max-width: 1440px;
        margin: 0 auto;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 2rem;
        max-width: 57.5rem;
        margin: 2rem 0;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: zoomIn 4s ease;

        &:hover {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 768px) {
        .item {
            flex-direction: column;
            text-align: center;
        }
    }
    
    .titulo {
        color: #333333;
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .pergunta {
        padding-bottom: 3.8rem;
    }
    .pergunta h3 {
        color: var(--background2);
        text-align: center;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
    
    .caixaTexto{
        max-width: 75.6875rem;
        padding-bottom: 3.8rem;

        a {
            color: var(--primaria);
            font-size: 2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        
        @media (max-width: 768px) {
            text-align: center;
        }
    }
`
