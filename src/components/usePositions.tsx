import { useState } from "react";
import { Tile } from "./Board";
import { settings } from './utils';

export const usePositions = () => {
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

  return {currentPositions, moveTile, emptyTile: currentPositions[0]}

}