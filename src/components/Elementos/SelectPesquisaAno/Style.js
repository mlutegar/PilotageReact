import styled from "styled-components"

export const SelectPesquisaAnoStyle = styled.div`
    position: relative;

    select {
        flex-shrink: 0;
        width: 90% !important;
        height: 3.0625rem;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        
        color: rgba(0, 0, 0, 0.43);
        font-family: "PT Sans";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 0 1rem;


        &:focus {
            outline: none;
        }
    }

    select::-ms-expand {
        display: none;
    }

    .lupa {
        width: 3.4375rem;
        height: 3.0625rem;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        position: absolute;
        right: 2rem;
        top: 0;
        align-items: center;
        transition: 0.5s all ease;

        &:hover {
            cursor: pointer;
        }

        svg {
            transition: 0.5s all ease;

            &:hover {
                fill: #fff;
            }

            &:active {
                transform: scale(0.9);
            }
        }
    }

    .input {
        width: 80% !important;
        height: 3.0625rem;

    }
`
