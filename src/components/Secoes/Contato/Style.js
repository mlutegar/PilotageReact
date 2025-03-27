import styled from "styled-components"

export const ContatoStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    
    .forms{
        width: 90%;
        display: flex;
        gap: 5rem;
        flex-direction: column;
    }
    
    .secao{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;

        @media (max-width: 768px){
            flex-direction: column;
        }
    }

    @media (max-width: 768px){
        .mapa img{
            width: 100%;
        }
    }
`
