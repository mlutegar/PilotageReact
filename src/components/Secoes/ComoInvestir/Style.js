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
        row-gap: 3rem;
        
        @media (max-width: 768px){
            grid-template-columns: 1fr;
        }
    }
    
    .cardContainer{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        position: relative;
    }
    
    .analise-inicial {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .analise-investidor{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 4rem;
    }
    
    .seta2 {
        rotate: 90deg;
    }
    
    .escolha-ativos {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    
    .seta3 {
        rotate: 180deg;
    }
    
    
`