import styled from "styled-components"

export const BotaosetaStyle = styled.div`
    svg {
        &:hover {
            cursor: pointer;
            transform: scale(1.2);
            transition: 0.3s;
        }

        &:active {
            transform: scale(1.1);
            transition: 0.3s;
        }
    }
`

export const Botaoseta = ({direction}) => {
    return (
        <BotaosetaStyle style={{transform: direction === "right" ? "rotate(180deg)" : "none"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path opacity="0.5"
                      d="M24 44C12.9543 44 4 35.0456 4 24C4 12.9543 12.9543 4 24 4C35.0456 4 44 12.9543 44 24C44 35.0456 35.0456 44 24 44Z"
                      fill="#003560"/>
                <path
                    d="M20.9394 16.9393C21.5252 16.3536 22.4748 16.3536 23.0606 16.9393C23.6464 17.5251 23.6464 18.4749 23.0606 19.0607L19.6213 22.5H32C32.8284 22.5 33.5 23.1716 33.5 24C33.5 24.8284 32.8284 25.5 32 25.5H19.6213L23.0606 28.9394C23.6464 29.5252 23.6464 30.4748 23.0606 31.0606C22.4748 31.6464 21.5252 31.6464 20.9394 31.0606L14.9393 25.0606C14.3536 24.4748 14.3536 23.5252 14.9393 22.9394L20.9394 16.9393Z"
                    fill="#003560"/>
            </svg>
        </BotaosetaStyle>
    )
}
