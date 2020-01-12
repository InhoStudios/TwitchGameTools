let players, missiles;

function initPlayers(game) {
	players = game.physics.add.group();
	missiles = game.physics.add.group();

	game.physics.add.overlap(players, missiles, missileHit, null, game);

	for(let i = 0; i < 20; i++) {
		addPlayer(Math.floor(Math.random() * 30), Math.floor(Math.random() * 24));
	}
}

function addPlayer(x, y) {
	player = players.create(x * TILE_SIZE + 15, y * TILE_SIZE + 15, 'player');
	player.setCollideWorldBounds(true);
}

function removePlayer() {

}

function movePlayer(player, x, y) {

}

function fireAction() {

}

function missileHit(player, missile) {
	player.destroy();
	missile.destroy();
}