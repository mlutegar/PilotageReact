import styled from "styled-components"

export const CardNossaEquipeStyle = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .curriculo, .url{
        display: flex;
    }
    
    .foto img{
        position: relative;
        bottom: 2.65rem;
        left: 1rem;
        height: 18rem;
    }
    
    .body{
        border-radius: 0rem 0rem 0.9375rem 0.9375rem;
        background: #FFF;
        box-shadow: 0px 6px 23.9px -15px rgba(0, 0, 0, 0.25);
        width: 24rem;
        height: 20.9375rem;
        flex-shrink: 0;
        padding-bottom: 2.62rem;
    }
    
    .url{
        justify-content: space-around;
        align-items: center;
    }

    .header{
        width: 24rem;
        height: 15.33656rem;
        flex-shrink: 0;
        border-radius: 0.9375rem 0.9375rem 0rem 0rem;
        background: #9CB1C3;
    }
`
