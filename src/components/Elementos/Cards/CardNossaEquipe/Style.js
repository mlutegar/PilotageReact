import styled from "styled-components"

export const CardNossaEquipeStyle = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.9375rem;
    box-shadow: 0px 6px 23.9px -15px rgba(0, 0, 0, 0.25);
    
    .curriculo, .urls {
        display: flex;
    }

    .foto img {
        position: relative;
        bottom: 2.65rem;
        left: 1rem;
        height: 18rem;
    }

    .body {
        width: 24rem;
        height: 20.9375rem;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .urls {
        justify-content: space-around;
        align-items: center;
        gap: 4rem;
    }

    .header {
        width: 24rem;
        height: 15.33656rem;
        flex-shrink: 0;
        border-radius: 0.9375rem 0.9375rem 0rem 0rem;
        background: #9CB1C3;
    }
`
