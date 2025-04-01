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
    
    .descricao{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    
    .endereco {
        max-width: 22.8125rem;
    }
    
    .info {
        display: flex;
        gap: 6rem;
        flex-direction: column;
    }
    
    .info-item{
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    @media (max-width: 768px){
        .mapa img{
            width: 50% !important;
            height: 50% !important;
        }
    }
`
