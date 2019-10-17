const Discord = require('discord.js');
const client = new Discord.Client();
const emojiBotMethods = require('./node_modules/emojibot-methods');

const token = 'NjM0MTcwODkxMTM1MzUyODM0.XaentQ.08T5Faiis48Ib3ITO2s_yu-bo5E';

client.on('ready', () => {
    console.log("this bot is online");
})

client.on('message', message => {
    emojiBotMethods.parseMessage(message);
});

client.login(token);