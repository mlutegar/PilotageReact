import styled from "styled-components"

export const FormularioStyle = styled.div`
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: #F5F7F9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 3rem 4rem;
    width: 100%;

    .titulo {
        font-size: 2rem;
        padding-bottom: 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    .inputs {
        width: 100%;
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1rem 0;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }


    @media (max-width: 768px) {
        .inputs-grid {
            display: flex;
            flex-direction: column;
        }
    }

    .mensagem {
        width: 95%;
        height: 10rem;

        @media (max-width: 1440px) {
            width: 50%;
        }

        @media (max-width: 1024px) {
            width: 75%;
        }
    }


    .btn {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }


`
