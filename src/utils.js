import { CellWidth, SizeTerrain, WidthCanvas, HeighCanvas } from './constants';

export function mod(a, b) {
    return ((a % b) + b) % b;
}

export function getSize() {
  if(!window.gridSize) {
    return [WidthCanvas, HeighCanvas];
  }

  const sizeT = window.gridSize;
  const bounds = CellWidth * sizeT;
  let width = bounds;
  let height = bounds;

  if(bounds > WidthCanvas) {
    width = WidthCanvas;
  }
  if(bounds > HeighCanvas) {
    height = HeighCanvas;
  }
  return [width, height];
}