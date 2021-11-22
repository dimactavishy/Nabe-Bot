const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.queue = new Map()

fs.readdir("Nabe-Bot/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: " + eventName)
  });
});
fs.readdir(__dirname + "./events/guild", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const guild = require(__dirname + `/events/guild/${file}`);
    let guildName = file.split(".")[0];
    client.on(guildName, event.bind(null, client));
    console.log("Loading Event: " + guildName)
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

client.on("ready", () => {
  const activities = [
  'My prefix is "nabe" or "n!".',
  "Need help? Please do nabe help.",
  `Serving in ${client.guilds.cache.size} servers.`,
  "Imageboard maid bot.",
  "NSFW maid bot.",
  "Music maid bot.",
  "Created by Joko Sukino."
];

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    client.user.setActivity(newActivity);
  }, 5000);
});

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
   channels.first().send("**Thank you for inviting me to your guild.**\n"
                  +"This one will work as hard as she could to improve master's and his peer's experience on this guild.\n"
                  +"_Added 3 Roles for moderation and commands._\n"
                  +"`Verified`\n"
                  +"`Muted`\n"
                  +"`Wibu`\n"
                  + "Feel free to change these role's settings, but please do not delete or rename them unless you already have an identically named role.\n"
                  + "_My prefix is `nabe` or `n!`. Pleased to be working with you!_",
                  {files: ["https://cdn.discordapp.com/attachments/898563395807232061/909676455326253076/ysp1y2idard41_1.png"]}).catch(e => console.log(e));
});

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
client.login(process.env.DISCORD_TOKEN);
