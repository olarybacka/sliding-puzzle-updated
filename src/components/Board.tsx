import { useState } from 'react';
import { Button, TileStyled, PuzzleContainer, Container } from './Board.style';
import { settings } from './utils';

export type Tile = {
  size: number;
  left: number;
  top: number;
};

export const Board = () => {
  const { dimension, size } = settings;
  const [currentPositions, setCurrentPositions] = useState<Tile[]>(
    Array.from({ length: dimension * dimension }).map((_, i) => ({
      left: size * (i % dimension),
      top: Math.floor(i / dimension) * size,
      id: i,
      size: size,
    })),
  );

  const moveTile = (i: number) => {
    const positions = [...currentPositions];
    [positions[0], positions[i]] = [positions[i], positions[0]];
    setCurrentPositions(positions);
  };

  return (
    <Container>
      <PuzzleContainer size={size} dimension={dimension}>
        {currentPositions.map(({ left, top }, index) => (
          <TileStyled
            key={index}
            left={left}
            top={top}
            index={index}
            size={size}
            onClick={() => moveTile(index)}
          />
        ))}
      </PuzzleContainer>
      <Button>Shuffle</Button>
    </Container>
  );
};
