let players, missiles;
let playerList = {}

function initPlayers(game) {
	players = game.physics.add.group();
	missiles = game.physics.add.group();

	game.physics.add.overlap(players, missiles, missileHit, null, game);

	for(let i = 0; i < 20; i++) {
		addPlayer(Math.floor(Math.random() * 30), Math.floor(Math.random() * 24), i);
	}
}

function addPlayer(x, y, id) {
	let player = players.create(x * TILE_SIZE + 15, y * TILE_SIZE + 15, 'player');
	player.setTint(getRandomTint());
	player.setCollideWorldBounds(true);
	playerList[id] = player;
	console.log(`Created player {${id}} at ${x}, ${y}`);
}

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

function removePlayer(id) {
	playerList[id].destroy;
	delete playerList[id];
}

function movePlayer(id, dir) {
	let player = playerList[id];

	switch(dir) {
		case 0:
			player.x += 1 * TILE_SIZE;
			player.setAngle(0);
		break;
		case 1:
			player.y += 1 * TILE_SIZE;
			player.setAngle(90);
		break;
		case 2:
			player.x -= 1 * TILE_SIZE;
			player.setAngle(180);
		break;
		case 3:
			player.y -= 1 * TILE_SIZE;
			player.setAngle(-90);
		break;
		default: break;
	}
}

function fireAction(id) {
	let player = playerList[id];
	switch(player.angle) {
		case 0:
			addMissile(player.x + TILE_SIZE, player.y, 0);
			break;
		case 90:
			addMissile(player.x, player.y + TILE_SIZE, 1);
			break;
		case 180:
		case -180:
			addMissile(player.x - TILE_SIZE, player.y, 2);
			break;
		case -90:
			addMissile(player.x, player.y - TILE_SIZE, 3);
			break;
	}
}

function addMissile(x, y, dir) {
	missile = missiles.create(x, y, 'player');

	switch(dir) {
		case 0:
			missile.setAngle(0);
			missile.setVelocity(4, 0);
		break;
		case 1:
			missile.setAngle(90);
			missile.setVelocity(0, 4);
		break;
		case 2:
			missile.setAngle(180);
			missile.setVelocity(-4, 0);
		break;
		case 3:
			missile.setAngle(-90);
			missile.setVelocity(0, -4);
		break;
		default: break;
	}
}

function missileHit(player, missile) {
	player.setPosition(Math.floor(Math.random() * 30), Math.floor(Math.random() * 24));
	missile.destroy();
}