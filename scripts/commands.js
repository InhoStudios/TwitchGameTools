const url = "http://localhost/TwitchGameTools/output.json";
let timestamp;

function retrieveData() {
	let command, dir, id;

	$.getJSON(url, function(data) {
		if(timestamp == data.timestamp) return;
		else timestamp = data.timestamp;

		command = data.command;
		dir = data.dir;
		id = data.username;

		console.log(`Command: ${command}, Direction: ${dir}, ID: ${id}`);

		switch(command) {
			case "join": addPlayer(id); break;
			case "move":
				switch (dir) {
					case "up": movePlayer(id, 0); break;
					case "right": movePlayer(id, 1); break;
					case "down": movePlayer(id, 2); break;
					case "left": movePlayer(id, 3); break;
					default: break;
				} break;
			case "fire": fireAction(id); break;
			case "leave": removePlayer(id); break;
			default: break;
		}
	});
}