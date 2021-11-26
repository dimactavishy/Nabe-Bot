const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
    info: {
        name: "tickle",
        description: "To bring others joy (or annoyance?)",
        usage: "",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        const ibloadEmbed = new Discord.MessageEmbed()
            .setDescription(`Generating...`)
            .setTimestamp()

        let Msg = await message.channel.send(ibloadEmbed);
        neko.sfw.tickle().then(tickle => {
            const embed_sfw = new Discord.MessageEmbed()
                .setTitle("Here's an image for you, master.")
                .setColor('GREEN')
                .setDescription(`It's childish, but it looks fun.`)
                .addField(`Provided by Nekos.life`, `[Full-Res Image](${tickle.url})`)
                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                .setImage(tickle.url)
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();

            message.channel.send(embed_sfw);
        });
        await Msg.delete();
    }
}
