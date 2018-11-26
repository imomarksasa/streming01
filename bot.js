const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {
    client.user.setGame(`قوي جدا`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});


bot.on('ready', () => {
    console.log("Turning On Bot")
    bot.user.setActivity("New Users", {type: 2});
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'public-chat');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
