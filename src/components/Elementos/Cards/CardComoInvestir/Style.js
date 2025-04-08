import styled from "styled-components"

export const CardComoInvestirStyle = styled.div`
    width: 25rem;
    height: 30rem;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    box-shadow: 30px 30px 0px var(--sombra);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    animation: zoomIn 0.5s ease;
    z-index: 10;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 20px 20px 0px var(--sombra);
    }

    @media (max-width: 768px) {
        width: 16rem;
        height: auto;
        box-shadow: none;
        gap: 1rem;
    }

    .header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 2rem;
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            height: auto;
        }
    }

    .conteudo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333333;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }

    .titulo {
        color: var(--primaria);
        text-align: center;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .subtitulo {
        color: #333333;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        max-width: 20rem;
    }

    @media (max-width: 768px) {
        .conteudo {
            font-size: 1rem;
            padding: 0 1rem 0.5rem;
        }

        .titulo {
            font-size: 1.5rem;
        }

        .subtitulo {
            font-size: 1rem;
        }
    }

`
