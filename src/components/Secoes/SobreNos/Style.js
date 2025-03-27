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
            gap: 3rem;

            align-items: center;
            justify-content: center;
        }
        
        @media (max-width: 768px) {

            .parte{
                width: 90%;
                padding: 0 1rem;
            }
            
            .parte svg{
                width: 19rem;
            }            
        }

    }
`
