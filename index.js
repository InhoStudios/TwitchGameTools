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

client.on('connected', (adress, port) => {
    client.action('epicyasuokid2007', 'Hello, TGT Bot is now connected');
});    

client.on('chat', (channel, user, message, self) => {
    if (message === '!game') {
        client.action('epicyasuokid2007', 'the game currently being played is INTERBOTS!');
    }
    
    if (message === '!join') {
        client.action('epicyasuokid2007', `${user} has joined the game!`);
    }

    if (message === '!moveL') {
        client.action('epicyasuokid2007', `${user} moved left!`);
    }

    if (message === '!moveR') {
        client.action('epicyasuokid2007', `${user} moved right!`);
    }
    if (message === '!moveU') {
        client.action('epicyasuokid2007', `${user} moved up!`);
    }
    if (message === '!moveD') {
        client.action('epicyasuokid2007', `${user} moved down!`);
    }

    if (message === '!fire') {
        client.action('epicyasuokid2007', `${user} fired!`);
    }

    if (message === '!respawn') {
        client.action('epicyasuokid2007', `${user} has respawned!`);
    }

    if (message === '!leave') {
        client.action('epicyasuokid2007', `${user} has disconnected from the game!`);
    }

    if (message === '!help') {
        client.action('epicyasuokid2007', 'INTERBOTS COMMAND LIST: \n !join : Join the game , \n !moveL : Move left , \n moveR : Move right , \n moveU : Move Up , \n moveD : Move down , \n !fire : Fire/shoot , \n !respawn : Respawn after death in game , \n !leave : Leave the game');
    }

});