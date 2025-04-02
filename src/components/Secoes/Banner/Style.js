// noinspection CssUnknownTarget

import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const BannerStyle = styled.div`
    .conteudo-banner {
        width: 100%;
        height: 500px; /* Ou qualquer altura desejada */
        background-size: cover;
        background-position: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
    }

    @media (max-width: 768px) {
        width: auto;
        position: static;
        margin: 0;
    }

    .dots {
        position: relative;
        bottom: 6rem;
    

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
