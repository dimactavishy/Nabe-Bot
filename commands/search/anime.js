const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Name In CAPS - RANDOM For Random
const Scraper = require("mal-scraper"); //npm i mal-scraper

module.exports = {
  info: {
    name: "anime",
    cooldown: "30",
    description: "",
    usage: "",
  },

  execute: async function (client, message, args) {

    let Text = args.join(" ");
    if (!message.content.includes('help')) {
      if (!Text) return message.channel.send(`Please Give Something!`);

      if (Text.length > 200) return message.channel.send(`Text Limit - 200`);

      const animeloadEmbed = new Discord.MessageEmbed()
        .setDescription(`Please wait...`)
        .setTimestamp()

      let Msg = await message.channel.send(animeloadEmbed).then(msg => { msg.delete({ timeout: 5000 }) });

      let Replaced = Text.replace(/ +/g, " ");

      let Anime;

      let Embed;
      try {
        Anime = await Scraper.getInfoFromName(Replaced);

        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";

        Embed = new MessageEmbed()
          .setColor(Color || "RANDOM")
          .setURL(Anime.url)
          .setTitle(Anime.title)
          .setDescription(Anime.synopsis)
          .addField(`Type`, Anime.type, true)
          .addField(`Status`, Anime.status, true)
          .addField(`Premiered`, Anime.premiered, true)
          .addField(`Episodes`, Anime.episodes, true)
          .addField(`Duration`, Anime.duration, true)
          .addField(`Popularity`, Anime.popularity, true)
          .addField(`Genres`, Anime.genres.join(", "))
          .addField('Score', Anime.score)
          .setThumbnail(Anime.picture)
          .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
          .setTimestamp();

      } catch (error) {
        return message.channel.send(`Unfortunately, i couldn't find what you're looking for.`).then(msg => { msg.delete({ timeout: 5000 }) });
      };
      message.channel.send(Embed);
    
    }

    if (message.content.includes('help')) {
      const helpEmbed = new Discord.MessageEmbed()
        .addField('Returns an anime summary from MAL', '`nabe anime <query>`')
        .setFooter('Example: nabe anime overlord')
      message.channel.send(helpEmbed)
    }
  }
};
