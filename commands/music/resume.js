const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "resume",
    description: "To resume the paused music",
    usage: "",
    cooldown: 0,
  },

  execute: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      serverQueue.connection.dispatcher.pause();
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ I will now resume the music for you.")
      .setColor("YELLOW")
      .setTitle("Already returned?")
      return message.channel.send(xd);
    }
    return message.reply("i am not currently playing anything in the music box.").then(msg => { msg.delete({ timeout: 5000 }) });
  },
};
