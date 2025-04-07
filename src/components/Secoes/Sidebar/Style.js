import styled from "styled-components"

export const SidebarStyle = styled.div`
    width: 23.3125rem;
    height: 92.3125rem;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 0.9375rem;
    background: #F5F7F9;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px){
        display: none;
    }
    
    .filtros{
        display: flex;
        gap: 2rem;
        flex-direction: column;
        
        div{
            display: flex;
            gap: 1rem;
            flex-direction: column;
        }
    }
`
