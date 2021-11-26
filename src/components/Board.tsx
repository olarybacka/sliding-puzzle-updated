import { Button, TileStyled, PuzzleContainer, Container } from './Board.style';
import { usePositions } from './usePositions';
import { isNextTo, settings } from './utils';

export type Tile = {
  size: number;
  left: number;
  top: number;
};

export const Board = () => {
  const { dimension, size } = settings;
  const { currentPositions, emptyTile, moveTile } = usePositions();

  const handleClicked = (i: number) => {
    if (isNextTo(currentPositions[i], emptyTile)) {
      moveTile(i);
    }
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
      <Button>Shuffle</Button>
    </Container>
  );
};
