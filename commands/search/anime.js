const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Name In CAPS - RANDOM For Random
const Scraper = require("mal-scraper"); //npm i mal-scraper

module.exports = {
  info: {
    name: "anime",
    description: `I will send an information about an anime. Powered by [MAL.](https://myanimelist.net/)`,
    usage: "[query (separate with spaces)]",
    cooldown: 20,
},

  execute: async function (client, message, args) {

    let Text = args.join(" ");
      if (!Text) return message.channel.send(`Please Give Something!`);

      if (Text.length > 200) return message.channel.send(`Text Limit - 200`);

      const animeloadEmbed = new Discord.MessageEmbed()
        .setDescription(`Please wait...`)
        .setTimestamp()

      let Msg = await message.channel.send(animeloadEmbed)

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
          .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
          .setTimestamp();

      } catch (error) {
        await Msg.delete();
        return message.channel.send(`Unfortunately, i couldn't find what you're looking for.`).then(msg => { msg.delete({ timeout: 5000 }) });
      };
      message.channel.send(Embed);
       await Msg.delete();
    
  }
};
