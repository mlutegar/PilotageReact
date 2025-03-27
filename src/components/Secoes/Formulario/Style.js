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
    padding: 5rem 2rem;
    width: 100%;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }
    
    .inputs{
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`
