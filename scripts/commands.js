let url = "https://inhostudios.api.stdlib.com/twitch-game-tools@dev/?text=move%20left&username=andyshen";

function retrieveData() {
	let command, dir, id;

	$.getJSON(url, function(data) {
		command = data.command;
		dir = data.dir;
		id = data.username;
		console.log(data);
	});

	switch (command) {
		case "join": addPlayer(id); break;
		case "move":
			switch (dir) {
				case "up": movePlayer(id, 0); break;
				case "right": movePlayer(id, 1); break;
				case "down": movePlayer(id, 2); break;
				case "left": movePlayer(id, 3); break;
				default: break;
			} break;
		case "attack": fireAction(id); break;
		case "leave": removePlayer(id); break;
		default: break;
	}
}