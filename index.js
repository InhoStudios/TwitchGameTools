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
        username: 'FitChallengeBot1',
        password: 'oauth:b06jua4p6768y1ikzt49mrnit6edxk',
    },
    channels: ['epicyasuokid2007']
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (adress, port) => {
    client.action('epicyasuokid2007', 'Hello, FitChalleneBot1 is now connected');
});    

client.on('chat', (channel, user, message, self) => {
    if (message === '!game') {
        client.action('epicyasuokid2007', 'epicyasuokid2007 is playing Minecraft!');
    }
    
});