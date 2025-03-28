import styled from "styled-components"

export const DocumentosRegulatoriosPageStyle = styled.section`
    .titulo {
        display: flex;
        justify-content: flex-start;
    }
    
    .conteudo{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-bottom: 1.5rem;
        align-items: center;
    }
        
    .subtitulo h3{
        color: black;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding-bottom: 3.8rem;
    }

    .cardsGrid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5rem;
        padding-bottom: 5rem;
    }
    
    .texto {
        text-align: justify;
        border-radius: 0.9375rem;
        background: #F5F7F9;
        padding: 2rem;
        color: black;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-family: "PT Sans";
        
    }
`
