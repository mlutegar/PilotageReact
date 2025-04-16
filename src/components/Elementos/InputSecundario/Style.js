import styled from "styled-components"

export const InputSecundarioStyle = styled.input`
    width: 32.5rem;
    height: 4.375rem;
    flex-shrink: 0;
    background: #FFF;
    padding: 0 1.25rem;
    border: none;
    
    @media (max-width: 768px) {
        width: 12.5rem !important;
    }
    
    &::placeholder {
        color: rgba(0, 0, 0, 0.43);
        font-family: "PT Sans";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
