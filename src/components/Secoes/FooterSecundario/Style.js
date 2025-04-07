import styled from "styled-components"

export const FooterSecundarioStyle = styled.div`
    background: #6B87A5;
    width: 100vw;
    height: 2.625rem;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    align-content: center;

    @media (max-width: 768px) {
        height: auto;
    }

    .conteudo{
        display: flex;
        flex-direction: row;
        padding: 0 2rem;
        max-width: 1440px;
        margin: 0 auto;
        justify-content: space-between;
        
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }
    
    .conteudo a {
        color: var(--secundaria);
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
        @media (max-width: 768px) {
            text-align: center;
        }
    }
`
