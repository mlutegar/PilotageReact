// noinspection CssUnknownTarget

import styled from "styled-components"

export const BannerStyle = styled.header`
    background: url("imagens/Banner1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    animation: fadeIn 1.5s ease-in-out;

    .conteudo-banner {
        padding: 15rem 10rem;
        max-width: 1440px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    a {
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        min-width: 5em;
        text-decoration: none;
        font-weight: bold;
    }

    .Titulo {
        color: var(--secundaria);
        font-size: 3rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        animation: slideIn 1.5s ease-out;

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
    
    .btn {
        padding-top: 2rem;
    }
    
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`

export const Texto = styled.div`
    max-width: 450px;
    
    @media (max-width: 768px){
        max-width: 100%;
        text-align: center;
    }
`
