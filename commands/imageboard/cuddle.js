const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
    info: {
        name: "cuddle",
        description: "To give warmth in both body and soul.",
        usage: "",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        const ibloadEmbed = new Discord.MessageEmbed()
            .setDescription(`Generating...`)
            .setTimestamp()

        let Msg = await message.channel.send(ibloadEmbed);
        neko.sfw.cuddle().then(cuddle => {
            const embed_sfw = new Discord.MessageEmbed()
                .setTitle("Here's an image for you, master.")
                .setColor('GREEN')
                .setDescription(`Lupu does this all the time. I think it was annoying but i sort of liked it.`)
                .addField(`Provided by Nekos.life`, `[Full-Res Image](${cuddle.url})`)
                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                .setImage(cuddle.url)
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();

            message.channel.send(embed_sfw);
        });
        await Msg.delete();
    }
}
