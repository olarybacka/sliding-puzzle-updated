import { useState } from 'react';
import { TileStyled } from './Tile.style';

const dimension = 3;
const size = 160;

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
    <div>
      {currentPositions.map(({ left, top, index }) => (
        <TileStyled key={index} left={left} top={top} index={index} size={size} />
      ))}
    </div>
  );
};
