const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "stop",
    description: "To stop the music and clearing the queue",
    usage: "",
    aliases: [],
  },

  execute: async function (client, message, args) {
    const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.reply("you have to be in a voice channel first to order me to stop.").then(msg => { msg.delete({ timeout: 5000 }) });
        await voiceChannel.leave();
        await message.channel.send("I'll gladly play music for you again, master!")
    message.react("✅")
  }
};
