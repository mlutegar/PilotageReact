import styled from "styled-components"

export const CardNossaEquipeStyle = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.9375rem;
    box-shadow: 0px 6px 23.9px -15px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;
    
    .close{
        position: absolute;
        z-index: 200;
    }

    &:hover {
        border: 2px solid #003560;
        cursor: pointer;
    }

    .modal {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        background: rgba(2, 39, 71, 0.81);
        z-index: 100;
        transform: scale(1.4);
    }

    .card {
        background: white;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.9375rem;
        box-shadow: 0px 6px 23.9px -15px rgba(0, 0, 0, 0.25);
    }

    .modal.hidden {
        display: none;
    }

    svg {
        transition: 0.5s all ease;
    }

    svg:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

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
