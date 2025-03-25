import styled from "styled-components"

export const CardComoInvestirStyle = styled.div`
    width: 25rem;
    height: 30rem;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    box-shadow: 30px 30px 0px var(--sombra);
;

    .header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 2rem;
    }
    
    .conteudo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }
    
    .titulo {
        color: var(--primaria);
        text-align: center;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
    .subtitulo {
        color: black;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        max-width: 20rem;
    }
    
`
