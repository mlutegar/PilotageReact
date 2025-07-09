import styled from "styled-components"

export const LeitorRelatorioStyle = styled.div`
    .desktop {
        display: flex;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .mobile {
        display: none;

        @media (max-width: 768px) {
            display: flex;
        }
    }

    .page.stf__item.--hard.--left.--simple, .page.stf__item.--soft.--right.--simple {
        width: 50% !important;
    }

    canvas.react-pdf__Page__canvas {
        width: 100% !important;
        height: auto !important;
    ""
    }

    .conteudo {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-right: 2.69rem;

        @media (max-width: 768px) {
            margin-right: 0;
            width: 100%;
            align-items: center;
            text-align: center !important;
        }
    }

    .titulo {
        text-align: left;
        padding: 0;

        @media (max-width: 768px) {
            text-align: center !important;
        }
    }

    .mobile {
        @media (max-width: 1024px) {
            display: none;
        }
    }
`
