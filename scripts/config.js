const TILE_SIZE = 30;

const config = { // game settings
	type: Phaser.WEBGL,
	parent: 'content',
	width: 1200,
	height: 720,
	backgroundColor: '#000022',
	pixelArt: true,
	physics: {
		default: 'arcade',
		fps: 10,
		arcade: {
			debug: false
		}
	},
	scene: [ MenuScene, GameScene ]
};

let game = new Phaser.Game(config);