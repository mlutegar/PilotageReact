// noinspection CssUnknownTarget

import styled from "styled-components"

export const BannerStyle = styled.div`
    background: url("imagens/Banner1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    animation: fadeIn 1.5s ease-in-out;

    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: auto;
        position: static;
        margin: 0;
    }

    .dots {
        position: relative;
        bottom: 6rem;
    }

    .conteudo-banner {
        padding: 15rem 4rem;
        max-width: 1440px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .conteudo-banner {
            padding: 10rem 2rem;
            width: auto;
        }
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
        max-width: 450px;

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

    @media screen and (max-width: 768px) {
        .btn {
            justify-content: center;
            display: flex;
        }
    }

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`
