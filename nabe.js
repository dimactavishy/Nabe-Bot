const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.queue = new Map()

fs.readdir(__dirname + "./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: " + eventName)
  });
});

fs.readdir("./commands/funstuff", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funstuff/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/functionalities", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/functionalities/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/funstuff", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/funstuff/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/imageboard", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/imageboard/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/moderation", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/music", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/music/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/nsfw", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});
fs.readdir("./commands/search", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/search/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Commands: " + commandName)
  });
});

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

client.on('ready', () => {
  client.user.setActivity(`nabe help in ${client.guilds.cache.size} servers`, { type: 'PLAYING' })
})

client.on("guildCreate", guild => {
  guild.roles.create({
    data: {
      name: 'Verified',
      color: '#808080',
    },
    reason: 'For verification',
    })
  guild.roles.create({
    data: {
      name: 'Muted',
      color: '#000000',
    },
    reason: 'For mute',
    })
  guild.roles.create({
    data: {
      name: 'Wibu',
      color: '#FF1493',
    },
    reason: 'For wibu',
    })
  const channels = guild.channels.cache.filter(channel => channel.type == "text");
  const setupEmbed = new Discord.MessageEmbed()
  .setTitle('Thank you for inviting me to your guild.')
  .setDescription("This one will work as hard as she could to improve master's and his peer's experience on this guild.\n"
                  +"**Added 3 Roles for moderation and commands.**\n"
                  +"`Verified`"
                  +"`Muted`"
                  +"`Wibu`"
                  + "Feel free to change these role's settings, **but please do not delete or rename them unless you already have an identically named role.**"
  .setImage('https://cdn.discordapp.com/attachments/898563395807232061/909676455326253076/ysp1y2idard41_1.png')
  .setFooter("My prefix is `nabe` or `n!`. Pleased to be working with you!")
  .setTimestamp()
  channels.first().send(setupEmbed).catch(e => console.log(e));
});

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
client.login(process.env.DISCORD_TOKEN);
