import styled from "styled-components"

export const CardRelatorioStyle = styled.div`
    transition: 0.5s all ease;
    background: linear-gradient(0deg, rgba(107, 135, 165, 0.77) 0%, rgba(107, 135, 165, 0.77) 100%), url('imagens/relatorio/default.png') lightgray 50% / cover no-repeat;

    width: 22.6875rem;
    height: 32.0625rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white !important;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        border-radius: 0.9375rem;
    }

    &:hover .data {
        display: block;
    }

    &:active {
        transform: scale(1);
    }

    .data {
        display: none;
    }
`
