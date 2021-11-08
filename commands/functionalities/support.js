module.exports = {
    name: 'support',
    cooldown: 10,
    description: "support embed",
    execute(client, message, args, Discord) {

        const supportEmbed = new Discord.MessageEmbed()
            .setColor('#390000')
            .setTitle('Seeking support?')
            .setURL('https://discord.gg/hzYBqJ7nf9')
            .setDescription('If you have a question that neither you nor i could answer, we can try asking my creator and his peers for a solution.')
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898844491543355442/sketch-1634371609663.png?width=499&height=499')
            .addFields(
                { name: "My creator's Discord is Joko Sukino#9162", value: 'You can call him by "Dimac". Bear in mind that he will usually not respond immediately to your questions, as he is not a bot and has a life.' },
                { name: 'Other social media accounts:', value: 'I will only answer bot-related questions on Discord, but feel free to follow me on these other accounts.' },
                { name: '<:instagram:898849333309505536> Instagram', value: '[@dimactavish](https://www.instagram.com/dimactavish/)', inline: true },
                { name: '<:youtube:898849482756722739> Youtube', value: '[dimactavish](https://www.youtube.com/channel/UCpFfMf3OAEp1UNzMLJSb9RA)', inline: true },
                { name: '<:steam:898850081732710420> Steam', value: '[dimactavish](https://steamcommunity.com/id/dimactavish/)', inline: true },
                { name: '<:reddit:898849044712017940> Reddit', value: '[u/JokoSukino](https://reddit.com/u/JokoSukino)', inline: true },
                { name: '<:osu:898851283946070029> Osu!', value: '[dimactavish](https://osu.ppy.sh/users/25881223)', inline: true },
                { name: ':moneybag: Donate', value: "[It'll cheer him up :)](https://saweria.co/dimactavish)", inline: true },
                { name: 'Oh, and by the way...', value: 'Discord server link is hyperlinked in the title ;)' }

            )
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        message.channel.send(supportEmbed);

    }
}