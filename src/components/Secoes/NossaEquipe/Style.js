import styled from "styled-components"

export const NossaEquipeStyle = styled.section`
    background: #F5F7F9;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    .conteudo {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .cards {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        margin-top: 6rem;
        flex-wrap: wrap;
        
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
        }
    }
`
