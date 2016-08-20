import Cell from 'objects/Cell';

class Grid{

	constructor(game, nbRow, nbColumn, cellSize) {
		this.cells = [];
		if(nbRow == 0 || nbColumn == 0) {
			console.error("Grid:width is null or equal to 0")
		}
		this.width  = width;
		this.height = height;
		
		for(let y = 0; y < nbColumn; ++y) {
			for(let x = 0; x < nbRow; ++x) {
				this.cells[x][y] = new Cell(x * cellSize, y * cellSize, cellSize, cellSize);
			}
		}
	}
}

export default Grid;