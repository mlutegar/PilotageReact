import styled from "styled-components"

export const CaixaDeRelatoriosStyle = styled.div`
    width: 18.3125rem;
    height: 13.5625rem;
    flex-shrink: 0;
    background: #FFF;
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .item {
        cursor: pointer;
        transition: 0.5s all ease;

        &:hover {
            color: #085696;
        }
        
        &:active {
            transform: scale(0.9);
        }
    }
`
