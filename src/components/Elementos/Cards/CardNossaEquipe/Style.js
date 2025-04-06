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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: zoomIn 4s ease;
    position: relative;

    &:hover {
        transform: translateY(-10px);
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
        
        @media (max-width: 768px) {
            bottom: -0.31rem;
            left: 0;
            height: 15rem;
        }
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
        
        @media (max-width: 768px) {
            width: 19rem;
        }
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

        @media (max-width: 768px) {
            width: 19rem;
        }
    }

    /* Modal styles - moved outside main component */

    & + .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(2, 39, 71, 0.81);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    & + .modal-overlay .modal-content {
        background: white;
        border-radius: 0.9375rem;
        position: relative;
        transform: scale(1.2);
        box-shadow: 0px 6px 23.9px -15px rgba(0, 0, 0, 0.25);
        
        @media (max-width: 768px) {
            transform: scale(1);
        }
    }

    & + .modal-overlay .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 1010;
    }

    & + .modal-overlay .modal-header {
        width: 24rem;
        height: 15.33656rem;
        flex-shrink: 0;
        border-radius: 0.9375rem 0.9375rem 0rem 0rem;
        background: #9CB1C3;
    }

    & + .modal-overlay .modal-body {
        width: 24rem;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 2rem 0;
    }

    & + .modal-overlay .foto img {
        position: relative;
        bottom: 2.65rem;
        left: 1rem;
        height: 18rem;
    }

    & + .modal-overlay .urls {
        display: none;
        justify-content: space-around;
        align-items: center;
        gap: 4rem;
    }

    & + .modal-overlay .descricao {
        display: flex;
        justify-content: center;
        text-align: justify;
        padding: 1rem;
    }
`