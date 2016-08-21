class Cell extends Phaser.Graphics{

	constructor(game, x, y, width, height, color= 0xFFFFFFF, lineColor = 0x000000) {
		super(game, 0, 0);
		this.beginFill(color);
		this.lineStyle(2, lineColor, 1);
    	this.drawRect(x, y, width, height);
    this.checked = false;
    this.realPosition = {x, y};
	}
}

export default Cell;