
module.exports = {
  info: {
    name: "skip",
    description: "To skip the current music",
    usage: "",
    cooldown: 0,
  },

  execute: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel) return message.reply("you have to be in a voice channel first to order me to skip.").then(msg => { msg.delete({ timeout: 5000 }) });
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("you have not ordered me to play anything yet.").then(msg => { msg.delete({ timeout: 5000 }) });

    try {
      serverQueue.connection.dispatcher.end("I'll gladly play music for you again, master!");
      message.react("✅")
    } catch (err) {
      message.channel.send("I'm sorry, i think i made a mistake there...");
      console.log(err);
    }

  },
};
