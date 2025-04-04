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
        align-items: center;
    }
    
    .cardGrid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 8rem;
        position: relative;
        column-gap: 8rem;
        
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
    
    .seta1{
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
    }

    .seta2{
        position: absolute;
        top: 108%;
        left: 37%;
        transform: translateY(-50%);
        
        svg{
            transform: rotate(0deg);
        }
    }

    .seta1bola{
        position: absolute;
        top: 23%;
        left: -20%;
        transform: translateY(-50%);
    }

    .seta2bola{
        position: absolute;
        bottom: 15%;
        left: -20%;
        transform: translateY(-50%);


        svg{
            transform: rotate(180deg);
        }
    }

    .seta3{
        position: absolute;
        top: 50%;
        left: -90px;
        transform: translateY(-50%);

        svg{
            transform: rotate(0deg);
        }
    }
    
    .analise-inicial {
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
    }
    
    .seta3 {
        rotate: 180deg;
    }
    
    
`