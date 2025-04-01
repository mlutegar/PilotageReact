import styled from "styled-components"

export const PoliticaDePrivacidadePageStyle = styled.section`
    
    .titulo {
        display: flex;
        justify-content: flex-start;
    }   
    
    .conteudo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .conteudo h5 {
        color: var(--primaria);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;    
    }
    
    .conteudo-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    .seus-direitos {
        background-color: var(--background4);
        padding: 3rem 2rem;
        border-radius: 0.9375rem;
    }
`