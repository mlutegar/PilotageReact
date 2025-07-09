import styled from "styled-components";

export const CompartilharRelatorioStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 2rem 0;

    h3 {
        margin: 0;
        font-size: 1.2rem;
        color: #333;
    }

    .share-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        text-align: center;
        margin: 1rem 0;
    }
`;