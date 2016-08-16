class Cell extends Phaser.Graphics{

	constructor(game, x, y, width, height) {
		super(game, 0, 0);
		this.beginFill(0xFF3300);
		this.lineStyle(2, 0x0000FF, 1);
    	this.drawRect(x, y, width, height);
		this.checked = false;
	}
}

export default Cell;