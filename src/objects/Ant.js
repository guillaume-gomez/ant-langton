import { CellWidth } from '../constants';

const Tilt = 90;
class Ant extends Phaser.Sprite{

	constructor(game, x, y) {
		super(game, x, y, "ant", 0);
		this.antRotation = 0;
    this.animations.add('down', [0, 1, 2], 10, true);
    this.animations.add('left', [12, 13, 14], 10, true);
    this.animations.add('right', [24, 25, 25], 10, true);
    this.animations.add('up', [32, 33, 34], 10, true);
	}

  rotate() {
    this.antRotation = (this.antRotation + Tilt) % 360;
  }

  updateAnt(cell) {
    this.rotate();
    if(cell.isChecked()) {
      switch(this.antRotation) {
        case 0:
          this.goLeft();
        break;
        case 90:
          this.goUp();
        break;
        case 180:
          this.goUp();
        break;
        case 270:
          this.goDown();
        break;
      }
    }
    else {
      switch(this.antRotation) {
        case 0:
          this.goDown();
        break;
        case 90:
          this.turnLeft();
        break;
        case 180:
          this.turnRight();
        break;
        case 270:
          this.goUp();
        break;
      }
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