import styled from "styled-components"

export const BannerStyle = styled.div`
    background: linear-gradient(0deg,
    ${props => props.backgroundImage?.includes("Banner5.png") ? "rgb(4 40 68 / 87%)" : "rgb(0 56 101 / 71%)"} 0%,
    ${props => props.backgroundImage?.includes("Banner5.png") ? "rgba(0, 56, 101, 0.54)" : "rgba(0, 56, 101, 0.54)"} 100%
    ),
    url(${props => props.backgroundImage || "imagens/Banner1.png"}) lightgray -270.204px -135.111px / 118.746% 146.55% no-repeat;
     background-size: cover;
    background-position: ${props =>
            props.backgroundImage?.includes("Banner5.png") ? "top" : "center"};
    animation: fadeIn 1.5s ease-in-out;
    overflow: hidden;
    
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
        background-position-x: -36rem;
    }

    .dots {
        margin-bottom: 2rem;
        bottom: 6rem;
    }

    .conteudo-banner {
        padding: 15rem 2rem;
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
        max-width: 950px;
        height: 180px;

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
        
        @media (max-width: 768px) {
            font-size: 2rem;g
        }
    }

    .btn {
        padding-top: 3rem;
    }

    @media screen and (max-width: 768px) {
        .btn {
            justify-content: center;
            display: flex;
            position: relative;
            top: 8rem;  
        }
    }

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`
