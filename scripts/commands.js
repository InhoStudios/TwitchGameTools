function getJSON() {
	
}

let cursors, spacebar;

function initInput(game) {
	spacebar = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	cursors = game.input.keyboard.createCursorKeys();
}

function getInput() {
	if(spacebar.isDown) fireAction("1");

	if (cursors.up.isDown) {
		movePlayer(1, 0);
	} else if (cursors.right.isDown) {
		movePlayer(1, 1);
	} else if (cursors.down.isDown) {
		movePlayer(1, 2);
	} else if (cursors.left.isDown) {
		movePlayer(1, 3);
	}
}