import styled from "styled-components"

export const NossosValoresStyle = styled.section`
    background: #003560;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    
    .conteudo{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
        max-width: 1440px;
        margin: 0 auto;
    }
    
    .itens{
        display: flex;
        justify-content: space-between;
        width: 100%;
        
    }

    @media (max-width: 768px) {
        .itens{
            flex-direction: column;
            align-items: center;
        }
    }
    
    .item{
        display: flex;
        flex-direction: column;
        max-width: 19rem;
        align-items: center;
        text-align: center;
        gap: 2rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: zoomIn 4s ease;

        &:hover {
            transform: translateY(-10px);
        }
    }
    
    .paragrafo1 ,
    .paragrafo2{
        margin: 2rem 0;
        a {
            color: var(--secundaria);
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }
        
        strong {
            color: var(--secundaria);
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
    
    .titulo2{
        margin-top: 3rem;
    }
    
    .itens a{
        color: var(--secundaria);
        text-align: center;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
`
