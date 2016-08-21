import Grid from 'objects/Grid';

const CameraVelocity = 10;
const Bounds = 2000;
const CellWidth = 50;

class GameState extends Phaser.State {

	create() {
		this.game.world.setBounds(0, 0, Bounds, Bounds);
		this.gridLayout = new Grid(this.game, Bounds/ CellWidth, Bounds/CellWidth, CellWidth);
		this.cursors = this.game.input.keyboard.createCursorKeys();

	}

	preload() {
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


}

export default GameState;
