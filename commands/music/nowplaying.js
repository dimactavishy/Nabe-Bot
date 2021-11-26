const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "nowplaying",
    description: "To show the music which is currently playing in this server",
    usage: "",
    cooldown: 0,
  },

  execute: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("you have not ordered me to play anything yet.").then(msg => { msg.delete({ timeout: 5000 }) });
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
    .setTitle("Nabe's very own Music Box")
    .setURL(song.url)
    .setDescription("You want to know of the song that i'm currently playing?")
    .setColor("#001450")
    .addField("Name", song.title)
    .addField("Duration", song.duration)
    .addField("Requester", song.req.tag)
    .addField(`Uploaded ${song.ago}`, `${song.views} Views`)
    .setImage(song.img)
    .setFooter('Egg-Shaped Music Maid', client.user.displayAvatarURL())
    .setTimestamp();
    return message.channel.send(thing)
  },
};
