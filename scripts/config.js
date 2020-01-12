const TILE_SIZE = 30;

let getRandomTint = function() {
	let tint = "0x";

	for(let i = 0; i < 6; i++) {
		let rVal = Math.floor(Math.random() * 12) + 4;

		switch(rVal) {
			case 10:
				rVal = "a";
				break;
			case 11:
				rVal = "b";
				break;
			case 12:
				rVal = "c";
				break;
			case 13:
				rVal = "d";
				break;
			case 14:
				rVal = "e";
				break;
			case 15:
				rVal = "f";
				break;
			default: break;
		}

		tint = tint.concat(rVal);
	}

	console.log(tint);
	return tint;
}

const config = { // game settings
	type: Phaser.WEBGL,
	parent: 'content',
	width: 1200,
	height: 720,
	backgroundColor: '#000022',
	pixelArt: true,
	physics: {
		default: 'arcade',
		fps: 60,
		arcade: {
			debug: false
		}
	},
	scene: [ MenuScene, GameScene ]
};

let game = new Phaser.Game(config);