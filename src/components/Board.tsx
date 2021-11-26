import { useState } from 'react';
import { Button, TileStyled, PuzzleContainer, Container } from './Board.style';
import { usePositions } from './usePositions';
import { isNextTo, settings } from './utils';

export type Tile = {
  size: number;
  left: number;
  top: number;
};

export const Board = () => {
  const { dimension, size, shuffleMoves } = settings;
  const { currentPositions, emptyTile, moveTile, setCurrentPositions } =
    usePositions();

  console.log('emptyTile: ', emptyTile);
  const handleClicked = (i: number) => {
    if (isNextTo(currentPositions[i], emptyTile)) {
      moveTile(i);
    }
  };

  const shuffle = () => {
    const positions = [...currentPositions];
    for (let i = 0; i < shuffleMoves; i++) {
      const candidates: (number | null)[] = currentPositions
        .map((tile, i) =>
          isNextTo(tile, positions[0]) ? i : null,
        )
        .filter((tile) => tile);
      const picked = candidates[Math.floor(Math.random() * candidates.length)];
      if (picked) {
        [positions[0], positions[picked]] = [positions[picked], positions[0]];
      }
    }
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
            onClick={() => handleClicked(index)}
          />
        ))}
      </PuzzleContainer>
      <Button onClick={shuffle}>Shuffle</Button>
    </Container>
  );
};
