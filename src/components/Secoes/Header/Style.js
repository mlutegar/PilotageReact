import styled from "styled-components"

const Top = styled.header`
    padding: 2rem 0;
    background-color: var(--secundaria);
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: space-between;

    a {
        color: var(--primaria);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        background-color: var(--background1);
        text-decoration: none;

        &:hover {
        }
    }

    .logo-header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo-header img {
        width: 14.5rem;
        height: 3.2438rem;

    }

    .detalhe {
        display: none;
        padding-left: 0;
        //display: block;
        width: 7.5rem;
        height: 2rem;
        flex-shrink: 0;
        background: var(--primaria);
    }

    @media screen and (max-width: 768px) {
        .detalhe {
            display: none;
        }
    }

    .hover {
        display: none;
        width: 0.9375rem;
        height: 0.9375rem;
        flex-shrink: 0;
        background-color: var(--detalhe);
    }


`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const BotaoMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export {Top}