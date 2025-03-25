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

    .conteudo{
        display: flex;
        flex-direction: row;
        padding: 0 2rem;
        max-width: 1440px;
        margin: 0 auto;
        justify-content: space-between;
    }
    
    .conteudo a {
        color: var(--secundaria);
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
