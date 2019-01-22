const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
 const prefix = "+";
client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {
    client.user.setGame(`انا مصري زغبني شهراني`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
