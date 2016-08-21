import Grid from 'objects/Grid';

class GameState extends Phaser.State {

	create() {
		this.gridLayout = new Grid(this.game, 9, 9, 50, 10, 10);
	}

	preload() {
	}

	update() {

	}

}

export default GameState;
