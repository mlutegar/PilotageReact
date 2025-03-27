import styled from "styled-components"

export const NewsletterStyle = styled.div`
    width: 100%;
    padding: 5rem 2rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: #F5F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
    }

    svg {
        width: 5.10331rem;
        height: 4.375rem;
        flex-shrink: 0;
    }
`
