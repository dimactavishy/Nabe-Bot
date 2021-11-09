const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "pause",
    description: "To pause the current music in the server",
    usage: "",
  },

  execute: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      let xd = new MessageEmbed()
      .setDescription("⏸ I will now pause the music for you.")
      .setColor("YELLOW")
      .setTitle("Need to do something first?")
      return message.channel.send(xd);
    }
    return message.reply("i am not currently playing anything in the music box.").then(msg => { msg.delete({ timeout: 5000 }) });
  },
};
