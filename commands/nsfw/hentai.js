module.exports = {
    info: {
        name: "hentai",
        description: "Sends a random lewd image/GIF.",
        usage: "[optional 'gif']",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        var superagent = require('superagent');
            if (!message.content.includes('gif')) {
                const hornyEmbed = new Discord.MessageEmbed()
                    .setTitle('No lewding here!')
                    .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                    .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                    .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();
                if (!message.channel.nsfw) return message.channel.send(hornyEmbed)

                const heloadEmbed = new Discord.MessageEmbed()
                    .setDescription(`Generating...`)
                    .setTimestamp()

                let Msg = await message.channel.send(heloadEmbed);

                superagent.get('https://nekobot.xyz/api/image').query({ type: 'hentai' }).end((err, response) => {

                    var embed_nsfw = new Discord.MessageEmbed()
                        .setTitle('P-Pervert!')
                        .setColor('#FFC0CB')
                        .setDescription(`I guess i still had to do what master says...`)
                        .addField(`Provided by Nekobot.xyz`, `[Full-Res Image](${response.body.message})`)
                        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')
                        .setImage(response.body.message)
                        .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                        .setTimestamp();

                    message.channel.send(embed_nsfw);
                });
                await Msg.delete();
            }
            if (message.content.includes('gif')) {
                const client = require('nekos.life');
                const neko = new client();
                const hornyEmbed = new Discord.MessageEmbed()
                    .setTitle('No lewding here!')
                    .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                    .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                    .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();
                if (!message.channel.nsfw) return message.channel.send(hornyEmbed)
                const heloadEmbed = new Discord.MessageEmbed()
                    .setDescription(`Generating...`)
                    .setTimestamp()
                let Msg2 = await message.channel.send(heloadEmbed);

                neko.nsfw.randomHentaiGif().then(randomHentaiGif => {
                    const embed_gif = new Discord.MessageEmbed()
                        .setTitle('P-Pervert!')
                        .setColor('#FFC0CB')
                        .setDescription(`I guess i still had to do what master says...`)
                        .addField(`Provided by Nekos.life`, `[Full-Res Image](${randomHentaiGif.url})`)
                        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')
                        .setImage(randomHentaiGif.url)
                        .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                        .setTimestamp();

                    message.channel.send(embed_gif);
                });
                await Msg2.delete();
            }
 
    }
}