import { Tile } from './Board';

export const settings = {
  dimension: 3,
  size: 160,
  shuffleMoves: 23,
};

export const isNextToEmpty = (tile: Tile, empty: Tile) => {
  const distance =
    Math.abs(tile.left - empty.left) + Math.abs(tile.top - empty.top);
  return distance === settings.size;
};
