import styled from 'styled-components';

export const Container = styled.div`
    width: 11.625rem;
    height: 2rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: #f5f5f5;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotSVG = styled.svg`
  /* Ajustes para o SVG da bolinha não marcada */
  width: 17px;
  height: 17px;
    transition: 0.5s all ease;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
    
    &:active {
        transform: scale(1);
    }
    
`;

export const DotPill = styled.div`
  /* Bolinha marcada (pílula) */
  width: 2rem;
  height: 1.0625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #003560;

    transition: 0.5s all ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

