import styled from "styled-components"

const BotaoSecundarioStyle = styled.button`
    width: 16.9375rem;
    height: 3.25rem;
    flex-shrink: 0;

    border-radius: 3.125rem;
    background: #9CB1C3;
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    cursor: pointer;animation: slideIn 1.5s ease-out;

    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    &:hover {
        background: var(--background4); 
        transform: scale(1.1);
    }

   
    &:active {
        transform: scale(0.95);
    }

    a {
        color: white;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`
export {BotaoSecundarioStyle}