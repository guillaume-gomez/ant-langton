import GameState from 'states/GameState';
import { getSize }  from './utils';

class Game extends Phaser.Game {

	constructor() {
    const width = getSize()[0];
    const height = getSize()[1];
		super(width, height, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

window.game = Game;

//new Game();
