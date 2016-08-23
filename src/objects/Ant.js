import { CellWidth, ElapsedTime } from '../constants';
import { mod } from "../utils";

const Tilt = 90;
class Ant extends Phaser.Sprite{

	constructor(game, x, y) {
		super(game, x, y, "ant", 0);
		this.antRotation = 90;
    this.animations.add('down', [0, 1, 2], 10, true);
    this.animations.add('left', [12, 13, 14], 10, true);
    this.animations.add('right', [24, 25, 26], 10, true);
    this.animations.add('up', [36, 37, 38], 10, true);

    this.game = game;
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
    const position = this.y + CellWidth;
    this.game.add.tween(this).to( { y: position }, ElapsedTime, Phaser.Easing.Linear.None, true);
    this.animations.play("down", 45, true);
    this.animations.stop("up");
    this.animations.stop("left");
    this.animations.stop("right");
  }

  goUp() {
    const position = this.y - CellWidth;
    this.game.add.tween(this).to( { y: position }, ElapsedTime, Phaser.Easing.Linear.None, true);
    this.animations.play("up", 45, true);
    this.animations.stop("down");
    this.animations.stop("left");
    this.animations.stop("right");
  }

  turnLeft() {
    const position = this.x - CellWidth;
    this.game.add.tween(this).to( { x: position }, ElapsedTime, Phaser.Easing.Linear.None, true);
    this.animations.play("left", 45, true);
    this.animations.stop("down");
    this.animations.stop("up");
    this.animations.stop("right");
  }

  turnRight() {
    const position = this.x + CellWidth;
    this.game.add.tween(this).to( { x: position }, ElapsedTime, Phaser.Easing.Linear.None, true);
    this.animations.play("right", 45, true);
    this.animations.stop("down");
    this.animations.stop("left");
    this.animations.stop("up");
  }
}

export default Ant;