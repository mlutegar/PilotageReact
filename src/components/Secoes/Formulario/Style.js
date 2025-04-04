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
    padding: 3rem 2rem;
    width: 100%;

    .titulo {
        font-size: 2rem;
        padding-bottom: 0;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }
    
    .inputs{
        width: 100%;
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    
    .mensagem {
        width: 85%;
        height: 10rem;
    }
`
