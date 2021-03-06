const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
  info: {
    name: "stop",
    description: "To stop the music and clearing the queue",
    usage: "",
    cooldown: 0,
  },

  execute: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel) return message.reply("i'm sorry but you need to be in a voice channel to play music!").then(msg => { msg.delete({ timeout: 5000 }) });
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("you have not ordered me to play anything yet.").then(msg => { msg.delete({ timeout: 5000 }) });
    serverQueue.songs = [];
    
    try {
      serverQueue.connection.dispatcher.end("I'll gladly play music for you again, master!");
      message.react("✅")
    } catch (err) {
      message.channel.send("I'm sorry, i think i made a mistake there...");
      console.log(err);
    }

  }
};

