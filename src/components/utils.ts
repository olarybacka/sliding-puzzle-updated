import { Tile } from './Board';

export const settings = {
  dimension: 3,
  size: 160,
  shuffleMoves: 23,
};

export const isNextTo = (tile: Tile, targetTile: Tile) => {
  const distance =
    Math.abs(tile.left - targetTile.left) + Math.abs(tile.top - targetTile.top);
  return distance === settings.size;
};
