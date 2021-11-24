const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "queue",
    description: "To show the server songs queue",
    usage: "",
    cooldown: 0,
  },

  execute: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("you have not ordered me to play anything yet.").then(msg => { msg.delete({ timeout: 5000 }) });

    let queue = new MessageEmbed()
    .setTitle("Nabe's very own Music Box queue")
    .setColor("#001450")
    .addField("Now Playing", serverQueue.songs[0].title,)
    .addField("Text Channel", serverQueue.textChannel, true)
    .addField("Voice Channel", serverQueue.voiceChannel, true)
    .setDescription(serverQueue.songs.map((song) => {
      if(song === serverQueue.songs[0])return
      return `**-** ${song.title}`
    }).join("\n"))
    .setFooter("Current music box volume is "+serverQueue.volume)
    if(serverQueue.songs.length === 1)queue.setDescription(`I don't remember you asking me to play a song for now. If you want me to play a song for you, just say "nabe play <song name>".`)
    message.channel.send(queue)
  },
};
