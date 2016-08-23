import Grid from 'objects/Grid';
import Ant from 'objects/Ant';
import { CellWidth, ElapsedTime } from '../constants';

const CameraVelocity = 10;
const Bounds = CellWidth * 15;

class GameState extends Phaser.State {

	create() {
		this.game.world.setBounds(0, 0, Bounds, Bounds);
		this.gridLayout = new Grid(this.game, Bounds/ CellWidth, Bounds/CellWidth, CellWidth);
		this.cursors = this.game.input.keyboard.createCursorKeys();

		this.ant = new Ant(this.game, 0, 0, "red");
		this.game.add.existing(this.ant);

		this.textStep = this.game.add.text(this.game.world.width * 0.01, this.game.world.height * 0.01, "Steps: ", { font: "18px Arial", fill: "#0000FF", align: "center" });

		this.setAntCenter();

		this.steps = 0;
		this.timer = this.game.time.create(false);
		this.timer.add(ElapsedTime, this.updatePosition, this);
		this.timer.start();

	}

	setAntCenter() {
		const indexX = Math.trunc( (Bounds / CellWidth) / 2 );
		const indexY = Math.trunc( (Bounds / CellWidth) / 2 );
		this.setAntOnCell(indexX, indexY);
	}

	setAntOnCell(indexX, indexY) {
		const cell = this.gridLayout.getCell(indexX, indexY);
		this.ant.x = cell.realPosition.x + CellWidth / 2 - this.ant.width / 2; 
		this.ant.y = cell.realPosition.y + CellWidth / 2 - this.ant.height / 2;
	}

	preload() {
    this.game.load.spritesheet('ant', 'res/ants.png', 32, 32);
  }

  updatePosition() {
  	let cell = this.gridLayout.getCellAtPosition( this.ant.x, this.ant.y );
  	this.ant.updateAnt(cell);
  	cell.toggle();
  	this.steps += 1;
  	this.textStep.text = "Steps :" + this.steps; 
  	this.timer.add(ElapsedTime, this.updatePosition, this);
  }

	update() {

    if (this.cursors.up.isDown)
    {
      this.game.camera.y -= CameraVelocity;
    }
    else if (this.cursors.down.isDown)
    {
      this.game.camera.y += CameraVelocity;
    }

    if (this.cursors.left.isDown)
    {
    	this.game.camera.x -= CameraVelocity;
    }
    else if (this.cursors.right.isDown)
    {
    	this.game.camera.x += CameraVelocity;
    }
	}

	/* render() {
		this.game.debug.spriteBounds(this.ant);
	}*/


}

export default GameState;
