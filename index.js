const tmi = require('twitch-js');

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
	client.action('epicyasuokid2007', 'Greetings, summoner. Inhotec has been successfully deployed');
});

client.on('chat', (channel, user, message, self) => {
	if(message.substring(0, 1) === "!") message.slice(0, 1);
	else return;

	switch(message) {
		case "!game": client.action('epicyasuokid2007', 'The game currently being played is INTERBOTS!'); break;
		case "!enter":
		case "!join": client.action('epicyasuokid2007', `${user.username} has joined the game!`); break;
		case "!move up": case "!mu":
		case "!move U": client.action('epicyasuokid2007', `${user.username} moved up!`); break;
		case "!move right": case "!mr":
		case "!move R": client.action('epicyasuokid2007', `${user.username} moved right!`); break;
		case "!move down": case "!md":
		case "!move D": client.action('epicyasuokid2007', `${user.username} moved down!`); break;
		case "!move left": case "!ml":
		case "!move L": client.action('epicyasuokid2007', `${user.username} moved left!`); break;
		case "!fire": client.action('epicyasuokid2007', `${user.username} fired!`);
		case "!disconnect":
		case "!leave": client.action('epicyasuokid2007', `${user.username} has disconnected from the game!`); break;
		case "!help": client.action('epicyasuokid2007', '~~INTERBOTS COMMANDS~~ !join : Join the game | !ml : Move left | !mr : Move right | !mu : Move Up | !md : Move down | !fire : Shoot projectile | !leave : Disconnect'); break;
		default: client.action('epicyasuokid2007', `I did not recognize ${user.username}'s command. Type !help for a list of available commands.`); break;
	}
});