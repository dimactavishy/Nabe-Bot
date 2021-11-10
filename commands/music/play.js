const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");

module.exports = {
  info: {
    name: "play",
    description: "To play songs :D",
    usage: "<song_name>",
  },

  execute: async function (client, message, args, Discord) {
    
    const channel = message.member.voice.channel;
    if (!message.content.includes('help')){
    if (!channel)return message.reply("sorry, but you have to be in a voice channel in order for me to play music.").then(msg => { msg.delete({ timeout: 5000 }) });

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))return message.reply("i have not been granted the authority to connect yet.").then(msg => { msg.delete({ timeout: 5000 }) });
    if (!permissions.has("SPEAK"))return message.reply("i have not been granted the authority to speak yet.").then(msg => { msg.delete({ timeout: 5000 }) });

    var searchString = args.join(" ");
    if (!searchString)return message.reply("please specify a keyword, i am not able to read your thoughts.").then(msg => { msg.delete({ timeout: 5000 }) });

    var serverQueue = message.client.queue.get(message.guild.id);

    var searched = await yts.search(searchString)
    if(searched.videos.length === 0)return message.reply("i'm sorry if i'm being incompetent, but i can't find the piece that you are looking for.").then(msg => { msg.delete({ timeout: 5000 }) })
    var songInfo = searched.videos[0]

    const song = {
      id: songInfo.videoId,
      title: Util.escapeMarkdown(songInfo.title),
      views: String(songInfo.views).padStart(10, ' '),
      url: songInfo.url,
      ago: songInfo.ago,
      duration: songInfo.duration.toString(),
      img: songInfo.image,
      req: message.author,
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      let thing = new MessageEmbed()
      .setTitle("Nabe's very own Music Box")
      .setURL(song.url)
      .setDescription("Yes, i will put the song you've specified in the queue.")
      .setColor("#001450")
      .addField("Name", song.title)
      .addField("Duration", song.duration)
      .addField("Requester", song.req.tag)
      .addField(`Uploaded ${song.ago}`, `${song.views} Views`)
      .setImage(song.img)
      .setFooter('Egg-Shaped Music Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
      .setTimestamp();
      return message.channel.send(thing);
    }

    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume: 2,
      playing: true,
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      if (!song) {
        message.channel.send("I'll gladly play music for you again, master!")
        queue.voiceChannel.leave();
        message.client.queue.delete(message.guild.id);
        return;
      }

      const dispatcher = queue.connection
        .play(ytdl(song.url, {filter: 'audioonly'}))
        .on("finish", () => {
          queue.songs.shift();
          play(queue.songs[0]);
        })
        .on("error", (error) => console.error(error));
      dispatcher.setVolumeLogarithmic(queue.volume / 5);
      let thing = new MessageEmbed()
      .setTitle("Nabe's very own Music Box")
      .setURL(song.url)
      .setColor("#001450")
      .addField("Title", song.title)
      .setDescription("I will now play the song you've specified in the music box.")
      .addField("Duration", song.duration)
      .addField("Requester", song.req.tag)
      .addField(`Uploaded ${song.ago}`, `${song.views} Views`)
      .setImage(song.img)
      .setFooter('Egg-Shaped Music Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
      .setTimestamp();
      return message.channel.send(thing);
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      channel.guild.voice.setSelfDeaf(true)
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Sorry, i was confused there for a moment. ${error}`).then(msg => { msg.delete({ timeout: 5000 }) });
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(`Sorry, i was confused there for a moment. ${error}`).then(msg => { msg.delete({ timeout: 5000 }) });
    }
  }
    if (message.content.includes('help')) {
      const helpEmbed = new Discord.MessageEmbed()
          .addField('Adds a song to queue.', '`nabe play <query or link>`')
          .setFooter('Example: nabe play voracity')
      message.channel.send(helpEmbed)
  }
  }
};
