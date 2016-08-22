import { CellWidth } from '../constants';
import { mod } from "../utils";

const Tilt = 90;
class Ant extends Phaser.Sprite{

	constructor(game, x, y) {
		super(game, x, y, "ant", 0);
		this.antRotation = 90;
    this.animations.add('down', [0, 1, 2], 10, true);
    this.animations.add('left', [12, 13, 14], 10, true);
    this.animations.add('right', [24, 25, 25], 10, true);
    this.animations.add('up', [32, 33, 34], 10, true);
	}

  rotate(direction) {
    const newRotation = direction > 0 ? (this.antRotation + Tilt) : (this.antRotation - Tilt);
    this.antRotation = mod(newRotation, 360);
  }

  updateAnt(cell) {
    if(cell.isChecked()) {
      this.rotate(1);
    } else {
      this.rotate(-1);
    }
    switch(this.antRotation) {
      case 0:
        this.turnRight();
      break;
      case 90:
        this.goUp();
      break;
      case 180:
        this.turnLeft();
      break;
      case 270:
        this.goDown();
      break;
    }
  }

  goDown() {
    this.y = this.y + CellWidth;
  }

  goUp() {
    this.y = this.y - CellWidth;
  }

  turnLeft() {
    this.x = this.x - CellWidth;
  }

  turnRight() {
    this.x = this.x + CellWidth;
  }
}

export default Ant;