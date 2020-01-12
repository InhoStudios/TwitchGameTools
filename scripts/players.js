let players, missiles;
let refreshPlayerDisplay = false;
let playerList = {};
let playerText;

function initPlayers(game) {
	players = game.physics.add.group();
	missiles = game.physics.add.group();
	playerText = [];
	game.physics.world.setBounds(0, 0, 900, 720);

	game.physics.add.overlap(players, missiles, missileHit, null, game);
}

function generatePlayerDisplay(game) {
	refreshPlayerDisplay = false;

	for(let i = 0; i < playerText.length; i++) playerText[i].destroy();

	playerText = [];

	let i = 0;
	for(let player in playerList) {
		let text = game.add.text(1050, 150 + 30 * i, `${player}`, { fill: '#FFF', fontSize: 20 }).setOrigin(0.5);
		playerText.push(text);
		i++;
	}
}

function addPlayer(id) {
	if(playerList[id] != null) return;
	x = Math.floor(Math.random() * 30);
	y = Math.floor(Math.random() * 24);
	let player = players.create(x * TILE_SIZE + 15, y * TILE_SIZE + 15, 'player');
	player.setTint(getRandomTint());
	player.setCollideWorldBounds(true);
	playerList[id] = player;
	console.log(`Created player {${id}} at ${x}, ${y}`);
	refreshPlayerDisplay = true;
}

function fireAction(id) {
	if(playerList[id] == null) return;
	let player = playerList[id];

	switch(player.angle) {
		case 0:
			addMissile(player.x, player.y - TILE_SIZE, 0);
			break;
		case 90:
			addMissile(player.x + TILE_SIZE, player.y, 1);
			break;
		case 180:
		case -180:
			addMissile(player.x, player.y + TILE_SIZE, 2);
			break;
		case -90:
			addMissile(player.x - TILE_SIZE, player.y, 3);
			break;
	}
}

function removePlayer(id) {
	if(playerList[id] == null) return;
	player = playerList[id];
	player.destroy();
	console.log(`Player {${id}} has died.`);
	delete playerList[id];
	refreshPlayerDisplay = true;
}

function movePlayer(id, dir) {
	if(playerList[id] == null) return;
	let player = playerList[id];

	switch(dir) {
		case 0:
			player.y -= TILE_SIZE;
			player.setAngle(0);
		break;
		case 1:
			player.x += TILE_SIZE;
			player.setAngle(90);
		break;
		case 2:
			player.y += TILE_SIZE;
			player.setAngle(180);
		break;
		case 3:
			player.x -= TILE_SIZE;
			player.setAngle(-90);
		break;
		default: break;
	}
}

function addMissile(x, y, dir) {
	missile = missiles.create(x, y, 'missile');

	switch(dir) {
		case 0:
			missile.setAngle(0);
			missile.setVelocity(0, -100);
		break;
		case 1:
			missile.setAngle(90);
			missile.setVelocity(100, 0);
		break;
		case 2:
			missile.setAngle(180);
			missile.setVelocity(0, 100);
		break;
		case 3:
			missile.setAngle(-90);
			missile.setVelocity(-100, 0);
		break;
		default: break;
	}
}

function missileHit(player, missile) {
	let playerObj = null;

	for(let i = 0; i < Object.keys(playerList).length; i++) {
		if(Object.values(playerList)[i] === player) {
			playerObj = Object.keys(playerList)[i];
			removePlayer(playerObj);
			break;
		}
	}

	missile.destroy();
}

function tickMissiles(game) {
	missiles.children.each(function(missile) {
		if(missile.x < 0 || missile.x > 900 || missile. y < 0 || missile.y > 720) missile.destroy();
	}, game);
}