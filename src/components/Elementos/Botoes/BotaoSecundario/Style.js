import styled from "styled-components"

const BotaoSecundarioStyle = styled.button`
    button {
        width: 13.09769rem;
        height: 3.24325rem;
        flex-shrink: 0;
        border-radius: 3.125rem;
        background: var(--primaria);
        display: flex;
        align-items: center;
        justify-content: center;
        border-style: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
    }

    button:hover {
        background: var(--background4); 
        transform: scale(1.1);
    }

   
    button:active {
        transform: scale(0.95);
    }

    a {
        color: var(--primaria);
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`
export {BotaoSecundarioStyle}