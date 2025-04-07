import styled from "styled-components"

export const InputPrimarioStyle = styled.input`
    width: 46.25rem;
    height: 4.375rem;
    flex-shrink: 0;
    background: #FFF;
    padding: 0 1.25rem;
    border: none;
    
    @media (max-width: 768px){
        width: 80%;
    }
    
    &::placeholder {
        color: rgba(0, 0, 0, 0.43);
        font-family: "PT Sans";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    &:focus {
        outline: none;
    }
`
