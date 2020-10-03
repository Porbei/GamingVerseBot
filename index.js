const { Discord, Client } = require('discord.js');
const client = new Client()

client.on('ready', () => {
    console.log("Bot Online")
})

client.login('token here')
