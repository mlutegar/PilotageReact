import styled from "styled-components"

const Top = styled.header`
    padding: 1.1rem 0;
    background-color: var(--secundaria);
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .logo-header {
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

        &:hover {
            cursor: pointer;
        }
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

export const HamburgerButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    margin-right: 20px;

    span {
        width: 100%;
        height: 3px;
        background-color: var(--primaria);
        border-radius: 3px;
        transition: all 0.3s linear;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export const MenuMobile = styled.div`
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--secundaria);
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    padding: 2rem 1rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 9;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);

    ${BotaoMenu} {
        margin: 1rem 0;
    }
    
    a {
        width: 100%;
        text-align: left;
        padding: 1rem;
    }
    
    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export {Top}