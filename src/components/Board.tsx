import { useState } from 'react';
import { Button, TileStyled, PuzzleContainer, Container } from './Board.style';
const dimension = 3;
const size = 160;
const shuffleMoves = 23;

export type Tile = {
  size: number;
  left: number;
  top: number;
  index: number;
};

export const Board = () => {
  const [currentPositions, setCurrentPositions] = useState<Tile[]>(
    Array.from({ length: dimension * dimension }).map((_, i) => ({
      left: size * (i % dimension),
      top: Math.floor(i / dimension) * size,
      index: i,
      size: size,
    })),
  );

  return (
    <Container>
      <PuzzleContainer size={size} dimension={dimension}>
        {currentPositions.map(({ left, top, index }) => (
          <TileStyled
            key={index}
            left={left}
            top={top}
            index={index}
            size={size}
          />
        ))}
      </PuzzleContainer>
      <Button>Shuffle</Button>
    </Container>
  );
};
