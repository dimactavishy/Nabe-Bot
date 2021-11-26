const client = require('nekos.life');
const neko = new client();

module.exports = {
    info: {
        name: "hboobs",
        description: "Sends a lewd image/GIF of a woman's bosom.",
        usage: "",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        const hornyEmbed = new Discord.MessageEmbed()
        .setTitle('No lewding here!')
        .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
        .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
        .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
        .setTimestamp();
        if (!message.channel.nsfw) return message.channel.send(hornyEmbed)
        const heloadEmbed = new Discord.MessageEmbed()
            .setDescription(`Generating...`)
            .setTimestamp()

        let Msg = await message.channel.send(heloadEmbed);

        neko.nsfw.boobs().then(boobs => {
            const embed_nsfw = new Discord.MessageEmbed()
                .setTitle('P-Pervert!')
                .setColor('#FFC0CB')
                .setDescription(`Very plump, if only i could grow mine a little bit more...`)
                .addField(`Provided by Nekos.life`, `[Full-Res Image](${boobs.url})`)
                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')
                .setImage(boobs.url)
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();

            message.channel.send(embed_nsfw);
        });
        await Msg.delete();
    }
}