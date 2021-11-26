const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
    info: {
        name: "wallpaper",
        description: "I will give you an anime-oriented wallpaper.",
        usage: "",
        cooldown: 20,
    },
    async execute(client, message, args, Discord) {
        const ibloadEmbed = new Discord.MessageEmbed()
            .setDescription(`Generating...`)
            .setTimestamp()

        let Msg = await message.channel.send(ibloadEmbed);
        neko.sfw.wallpaper().then(wallpaper => {
            const embed_sfw = new Discord.MessageEmbed()
                .setTitle("Here's an image for you, master.")
                .setColor('GREEN')
                .setDescription(`A good piece. Will you put this as your wallpaper, master?`)
                .addField(`Provided by Nekos.life`, `[Full-Res Image](${wallpaper.url})`)
                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                .setImage(wallpaper.url)
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();

            message.channel.send(embed_sfw);
        });
        await Msg.delete();
    }
}
