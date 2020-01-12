class MenuScene extends Phaser.Scene {
	constructor() {
		super({key: 'Menu', active: true});
	}

	create() {
		this.add.text(600, 300, 'After Society', { fill: '#FFF', fontSize: 32 }).setOrigin(0.5);
	
		const playButton = this.add.text(600, 400, 'Play Game', { fill: '#000', backgroundColor: '#888', padding: 10, fontSize: 18 })
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerover', () => { playButton.setStyle({ backgroundColor: '#666' }) })
			.on('pointerout', () => { playButton.setStyle({ backgroundColor: '#888' }) })
			.on('pointerdown', () => this.scene.start("Game"));
	}
}

class GameScene extends Phaser.Scene {
	constructor() {
		super({key: 'Game', active: false});
	}

	preload() {

	}
	
	create() {

	}
	
	update() {
		
	}
}