import styled from "styled-components"

export const SobreNosStyle = styled.section`
    .conteudo{
        display: flex;
        justify-content: space-between;
        padding-bottom: 1.5rem;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }

        .parte{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 3rem;
            justify-content: center;
        }
        
        @media (max-width: 768px) {

            .parte{
                width: 90%;
                padding: 0 1rem;
                align-items: center;
            }
            
            .parte svg{
                width: 19rem;
            }            
        }

    }
`
