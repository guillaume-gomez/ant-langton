import Cell from 'objects/Cell';

class GameState extends Phaser.State {

	create() {
		this.cell = new Cell(this.game, 10, 10, 30, 30);
		this.cell2 = new Cell(this.game, 50, 50, 23, 58);
		this.game.add.existing(this.cell);
		this.game.add.existing(this.cell2);
	}

	preload() {
	}

	update() {

	}

}

export default GameState;
