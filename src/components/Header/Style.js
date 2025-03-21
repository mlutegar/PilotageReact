import styled from "styled-components"

const Top = styled.header`
  padding: 0 9.375rem;
  background-color: var(--secundaria);
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  height: 10.9375rem;
    
  a {
    color: var(--primaria);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    background-color: var(--background1);
    text-decoration: none;
    &:hover .hover {
    }
  }
    .menu {
        display: flex;
        flex-direction: row;
        gap: 1.25rem;
    }
    
    .logo-header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo-header img {
        width: 18.125rem;
        height: 4.05475rem;
    }
    .detalhe {
        padding-left: 0;
        display: block;
        width: 7.5rem;
        height: 2.5625rem;
        flex-shrink: 0;
        background: var(--primaria);
    }
    
    .botao-menu {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .hover {
        width: 0.9375rem;
        height: 0.9375rem;
        flex-shrink: 0;
        background-color: var(--detalhe);
    }
    

`

export {Top}