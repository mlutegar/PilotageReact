import styled from "styled-components"

export const DenunciasStyle = styled.div`
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
    
    @media (max-width: 768px) {
        width: auto !important;
    }

    .titulo {
        font-size: 2rem;
        padding-bottom: 0;
    }
    
    .texto {
        max-width: 49.5625rem;
        flex-shrink: 0;
        color: #333333;
        text-align: justify;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;}
    
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
    
    .form {
        width: 85%; 
        
        @media (max-width: 768px) {
            width: 85% !important;
            margin-bottom: 1rem;
        }
    }

    .form-mensagem {
        width: 85%;
        height: 10rem;
        
        @media (max-width: 768px) {
            width: 85% !important;
            margin-bottom: 1rem;
        }
    }
`
