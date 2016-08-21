import { CellWidth } from '../constants';

class Ant extends Phaser.Sprite{

	constructor(game, x, y) {
		super(game, x, y, "ant", 0);
		this.animations.add('down', [0, 1, 2], 10, true);
    this.animations.add('left', [12, 13, 14], 10, true);
    this.animations.add('right', [24, 25, 25], 10, true);
    this.animations.add('up', [32, 33, 34], 10, true);
	}

  turnLeft() {
    this.x = this.x - CellWidth;
  }

  turnRight() {
    this.x = this.x + CellWidth;
  }
}

export default Ant;