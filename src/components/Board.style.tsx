import styled from 'styled-components';
import { Tile } from './Board';

export const Button = styled.button`
  background: #2557c1;
  height: 45px;
  color: #fff;
  border: none;
  outline: none;
  margin: 20px;
  padding: 14px;
  cursor: pointer;
`;

export const TileStyled = styled.button<Tile>`
  transition: 200ms ease;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background: ${(props) =>
    props.index === 0
      ? 'none'
      : 'url("./img/puzzle/fish/' + props.index + '.png") grey'};
  background-size: cover;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  &:disabled {
    cursor: no-drop;
  }
  &:focus {
    outline: none;
  }
`;

export const PuzzleContainer = styled.div<{ size: number; dimension: number }>`
  width: ${({ size, dimension }) => size * dimension}px;
  height: ${({ size, dimension }) => size * dimension}px;
`;

export const Container = styled.section`
  display: flex;
`;
