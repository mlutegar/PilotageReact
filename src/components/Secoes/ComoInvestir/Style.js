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
        position: relative;
    }
    
    .cardContainer::after {
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-top: 5px solid black;
        position: absolute;
    }

    .analise-inicial::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 2px;
        background-color: black;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
    }
    
    .analise-investidor::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 50px;
        background-color: black;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
    }

    .escolha-ativos::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 2px;
        background-color: black;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
    }
`