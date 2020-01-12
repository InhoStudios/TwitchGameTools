const tmi = require('twitch-js');
const https = require('https');

const options = {
	options: {
		debug: true,
	},
	connection: {
		cluster: 'aws',
		reconnect: true,
	},
	identity: {
		username: 'inhotec',
		password: 'oauth:j1n4zdgcho6hpfdt1ig279l9271jb1',
	},
	channels: ['epicyasuokid2007']
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
	client.action('epicyasuokid2007', 'Greetings, humans. Inhotec has been successfully deployed');
});

let getUrl = function(text, id) {
	return `https://inhostudios.api.stdlib.com/twitch-game-tools@dev/?text=${text}&username=${id}`;
};

client.on('chat', (channel, user, message, self) => {
	if(message.substring(0, 1) === "!") message.slice(0, 1);
	else return;

	let readUrl;

	switch(message) {
		case "!game": client.action('epicyasuokid2007', `The game currently being played is Interbots!`); return;
		case "!enter":
		case "!join": client.action('epicyasuokid2007', `${user.username} has joined the game!`); readUrl = getUrl("join", user.username); break;
		case "!move up": case "!mu":
		case "!move U": readUrl = getUrl("move%20up", user.username); break;
		case "!move right": case "!mr":
		case "!move R": readUrl = getUrl("move%20right", user.username); break;
		case "!move down": case "!md":
		case "!move D": readUrl = getUrl("move%20down", user.username); break;
		case "!move left": case "!ml":
		case "!move L": readUrl = getUrl("move%20left", user.username); break;
		case "!shoot": case "!attack":
		case "!fire": readUrl = getUrl("fire", user.username); break;
		case "!disconnect":
		case "!leave": client.action('epicyasuokid2007', `${user.username} has disconnected from the game!`);
		readUrl = getUrl("leave", user.username); break;
		case "!help": client.action('epicyasuokid2007', '~~INTERBOTS COMMANDS~~ !join : Join the game | !ml : Move left | !mr : Move right | !mu : Move Up | !md : Move down | !fire : Shoot projectile | !leave : Disconnect'); return;
		default: client.action('epicyasuokid2007', `I did not recognize ${user.username}'s command. Type !help for a list of available commands.`); return;
	}

	parseData(readUrl);
});

const fs = require('fs');

function parseData(content) {
	https.get(content, function(res) {
		let data = '';

		res.on('data', function(stream) { data += stream; });
		res.on('end', function() {
			fs.writeFile("output.json", data, 'utf8', function (err) {
				if (err) {
					console.log("An error occured while writing JSON Object to File.");
					return console.log(err);
				}
			});
		});
	});
}