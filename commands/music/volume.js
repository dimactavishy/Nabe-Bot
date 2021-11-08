const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "volume",
    description: "To change the server song queue volume",
    usage: "[volume]",
  },

  execute: async function (client, message, args) {
    
    const channel = message.member.voice.channel;
    if (!message.content.includes('help')){
    if (!channel)return message.reply("you have to be in a voice channel first to order me to change the volume.").then(msg => { msg.delete({ timeout: 5000 }) });
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("you have not ordered me to play anything yet.").then(msg => { msg.delete({ timeout: 5000 }) });
    if (!args[0])return message.reply(`currently, the volume is set to **${serverQueue.volume}**`);
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    let xd = new MessageEmbed()
    .setDescription(`Understood. I have set the volume to **${args[0]}**`)
    .setTitle("Is it too loud or is it too quiet?")
    .setColor("#001450")
    .setFooter('Egg-Shaped Music Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
    .setTimestamp();
    message.channel.send(xd);
    }
    if (message.content.includes('help')) {
      const helpEmbed = new Discord.MessageEmbed()
          .addField('Change music volume.', '`nabe volume <amount>`')
          .setFooter('Example: nabe volume 2')
      message.channel.send(helpEmbed)
  }
  },
};
