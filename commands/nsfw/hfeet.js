const client = require('nekos.life');
const neko = new client();

module.exports = {
    info: {
        name: "hfeet",
        description: "Sends a lewd image/GIF of some feet.",
        usage: "[optional 'gif']",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        if (!message.content.includes('gif')) {
            const hornyEmbed = new Discord.MessageEmbed()
                .setTitle('No lewding here!')
                .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();
            if (!message.channel.nsfw) return message.channel.send(hornyEmbed);
            const heloadEmbed = new Discord.MessageEmbed()
                .setDescription(`Generating...`)
                .setTimestamp()

            let Msg = await message.channel.send(heloadEmbed);

            neko.nsfw.feet().then(feet => {
                const embed_nsfw = new Discord.MessageEmbed()
                    .setTitle('P-Pervert!')
                    .setColor('#FFC0CB')
                    .setDescription(`W-Why did you get horny, Aren't feet dirty?!`)
                    .addField(`Provided by Nekos.life`, `[Full-Res Image](${feet.url})`)
                    .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')
                    .setImage(feet.url)
                    .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                    .setTimestamp();

                message.channel.send(embed_nsfw);
            });
            await Msg.delete();
        }
        if (message.content.includes('gif')) {
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
            let Msg2 = await message.channel.send(heloadEmbed);

            neko.nsfw.feetGif().then(feetGif => {
                const embed_gif = new Discord.MessageEmbed()
                    .setTitle('P-Pervert!')
                    .setColor('#FFC0CB')
                    .setDescription(`W-Why did you get horny, Aren't feet dirty?!`)
                    .addField(`Provided by Nekos.life`, `[Full-Res Image](${feetGif.url})`)
                    .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')
                    .setImage(feetGif.url)
                    .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                    .setTimestamp();

                message.channel.send(embed_gif);
            });
            await Msg2.delete();
        }
    }
}