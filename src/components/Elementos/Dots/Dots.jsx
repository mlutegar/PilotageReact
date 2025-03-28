import React from 'react';
import { Container, DotContainer, DotSVG, DotPill } from './Style';

const a = () => {
    console.log('a');
}

const Dots = ({ total = 5, ativo = 0, className, onDotClick = a }) => {
    /*
      - total: quantidade total de "bolinhas".
      - ativo: índice (base 0) do item que está selecionado.
    */

    // Cria um array com base na quantidade total de dots
    const dotsArray = Array.from({ length: total }, (_, index) => index);

    return (
        <Container className={className}>
            {dotsArray.map((dotIndex) =>
                dotIndex === ativo ? (
                    <DotPill key={dotIndex} />
                ) : (
                    <DotContainer key={dotIndex} onClick={() => onDotClick(dotIndex)}>
                        <DotSVG
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                        >
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#6483A2" />
                        </DotSVG>
                    </DotContainer>
                )
            )}
        </Container>
    );
};

export default Dots;
