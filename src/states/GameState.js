import Grid from 'objects/Grid';
import Ant from 'objects/Ant';
import { CellWidth } from '../constants';

const CameraVelocity = 10;
const Bounds = 250;

class GameState extends Phaser.State {

	create() {
		this.game.world.setBounds(0, 0, Bounds, Bounds);
		this.gridLayout = new Grid(this.game, Bounds/ CellWidth, Bounds/CellWidth, CellWidth);
		this.cursors = this.game.input.keyboard.createCursorKeys();

		this.ant = new Ant(this.game, 400, 100);
		this.game.add.existing(this.ant);

		this.setAntOnCell(3, 4);

	}

	setAntCenter() {
		const indexX = Math.trunc( (Bounds / CellWidth) / 2 );
		const indexY = Math.trunc( (Bounds / CellWidth) / 2 );
		setAntOnCell(indexX, indexY);
	}

	setAntOnCell(indexX, indexY) {
		const cell = this.gridLayout.getCell(indexX, indexY);
		this.ant.x = cell.realPosition.x + CellWidth / 2 - this.ant.width / 2; 
		this.ant.y = cell.realPosition.y + CellWidth / 2 - this.ant.height / 2;
	}

	preload() {
    this.game.load.spritesheet('ant', 'res/ants.png', 32, 32);
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
