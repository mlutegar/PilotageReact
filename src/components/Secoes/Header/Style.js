import styled from "styled-components"

const Top = styled.header`
    padding: 1.1rem 0;
    background-color: var(--secundaria);
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    
    .logo-header{
        &:hover {
            cursor: pointer;
            transform: scale(1.01);
            transition: 0.3s;
        }
        
        &:active {
            transform: scale(0.99);
            transition: 0.3s;
        }
    }

    a {
        position: relative;
        color: var(--primaria);
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        padding: .3em;
        margin: 0 .7em;
        background-color: var(--background1);
        text-decoration: none;
        transition: color 0.3s ease-in-out;
    }

    a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--primaria);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
    }

    a:hover::after {
        transform: scaleX(1);
    }



    .logo-header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo-header img {
        width: 14.5rem;
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