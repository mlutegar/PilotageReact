import styled from "styled-components"

export const FooterPrimarioStyle = styled.div`
    background: #003560;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    .conteudo {
        gap: 2rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 1440px;
        margin: 0 auto;
        padding: 2rem 2rem 5rem;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .logo {
        padding-top: 3.5rem;
        padding-bottom: 4rem;
    }

    .colunaMeio {
        display: flex;
        flex-direction: row;
        gap: 5rem;
        flex: 1;
        padding-top: 7rem;
        justify-content: center;
    }
    
    @media screen and (max-width: 768px) {
        .colunaMeio {
            flex-direction: column;
        }
    }

    .colunaMeio a {
        color: var(--secundaria);
        text-decoration: none;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .colunaMeio h3 {
        color: var(--secundaria);
        text-decoration: none;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .guia {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        border-right: 0.125rem solid var(--secundaria);
        width: 11rem;
    }

    .relatorio {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        border-right: 0.125rem solid var(--secundaria);
        max-width: 15rem;
        padding-right: 3rem;
    }

    .colunaDireita {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-top: 7rem;
        align-items: center;
    }

    .colunaDireita h3 {
        color: var(--secundaria);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .selo img {
        max-width: 14.07738rem;
        max-height: 8.0625rem;
        flex-shrink: 0;
    }

    .panamby img {
        width: 12.1875rem;
        height: 5.6875rem;
        flex-shrink: 0;
    }



`
