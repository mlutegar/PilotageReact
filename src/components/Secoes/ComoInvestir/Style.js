import styled from "styled-components"

export const ComoInvestirStyle = styled.section`
    background: #9CB1C3;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    
    .conteudo{
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        max-width: 1440px;
        margin: 0 auto;
    }
    
    .cardGrid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 7rem;
    }
    
    .cardContainer{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
