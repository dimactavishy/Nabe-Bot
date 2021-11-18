const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
    name: 'pfp',
    cooldown: 30,
    description: "",

    async execute(client, message, args, Discord) {
        if (!message.content.includes('lewd')) {
            const ibloadEmbed = new Discord.MessageEmbed()
                .setDescription(`Generating...`)
                .setTimestamp()

            let Msg = await message.channel.send(ibloadEmbed);
            neko.sfw.avatar().then(avatar => {
                const embed_sfw = new Discord.MessageEmbed()
                    .setTitle("Here's an image for you, master.")
                    .setColor('GREEN')
                    .setDescription(`Here's a random profile picture for you. Though i prefer if you put me as yours instead...`)
                    .addField(`Provided by Nekos.life`, `[Full-Res Image](${avatar.url})`)
                    .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                    .setImage(avatar.url)
                    .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();

                message.channel.send(embed_sfw);
            });
            await Msg.delete();
        }
        if (message.content.includes('lewd')) {
            const hornyEmbed = new Discord.MessageEmbed()
                .setTitle('No lewding here!')
                .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                .setTimestamp();
            if (!message.channel.nsfw) return message.channel.send(hornyEmbed)
            const ibloadEmbed2 = new Discord.MessageEmbed()
                .setDescription(`Generating...`)
                .setTimestamp()

            let Msg2 = await message.channel.send(ibloadEmbed2);
            neko.nsfw.avatar().then(avatar => {
                const embed_nsfw = new Discord.MessageEmbed()
                    .setTitle('P-Pervert!')
                    .setColor('#FFC0CB')
                    .setDescription(`W-Why would you put this as your avatar, you lewd!`)
                    .addField(`Provided by Nekos.life`, `[Full-Res Image](${avatar.url})`)
                    .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                    .setImage(avatar.url)
                    .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();

                message.channel.send(embed_nsfw);
            });
            await Msg2.delete();
        }
    }
}
