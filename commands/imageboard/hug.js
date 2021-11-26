const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
    info: {
        name: "hug",
        description: "To share warmth and softness.",
        usage: "",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        const ibloadEmbed = new Discord.MessageEmbed()
            .setDescription(`Generating...`)
            .setTimestamp()

        let Msg = await message.channel.send(ibloadEmbed);
        neko.sfw.hug().then(hug => {
            const embed_sfw = new Discord.MessageEmbed()
                .setTitle("Here's an image for you, master.")
                .setColor('GREEN')
                .setDescription(`CZ loves hugging things too. It makes her feel comfortable. In that case, can i hug you too, master?`)
                .addField(`Provided by Nekos.life`, `[Full-Res Image](${hug.url})`)
                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                .setImage(hug.url)
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();

            message.channel.send(embed_sfw);
        });
        await Msg.delete();
    }
}
