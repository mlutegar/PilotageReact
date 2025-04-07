import styled from "styled-components"

export const CardRelatorioStyle = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
    
    img{
        width: 15.97338rem;
        height: 22.625rem;
        flex-shrink: 0;
        aspect-ratio: 255.57/362.00;
    }
    
    .conteudo{
        display: flex;
        flex-direction: column;
        gap: 5rem;
        margin-right: 5rem;
    }
    
    .linha{
        width: 100%;
        height: 1px;
        background-color: #E0E0E0;
    }
`
