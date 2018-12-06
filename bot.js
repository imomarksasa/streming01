const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.on('ready', () => {
});



client.on('ready', () => {
    client.user.setGame(`#xDom`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
