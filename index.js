const Discord = require('discord.js');
const client = new Discord.Client();
const emojiBotMethods = require('./node_modules/emojibot-methods');

const token = 'NjM0MTcwODkxMTM1MzUyODM0.Xaj2XQ.HI5Pp9Q5CfCJr_UsonDuasVMieY';

client.on('ready', () => {
    console.log("this bot is online");
})

client.on('message', message => {
    emojiBotMethods.parseMessage(message);
});

client.login(token);