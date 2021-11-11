const Booru = require('booru')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "paheal",
        description: "booru image scraper",
        cooldown: 30,
    },
    async execute(client, message, args, Discord) {
        const image_query = args.join(' ');
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
        if (!message.content.includes('help'))
          if (!message.content.includes('narberal_gamma'))
            Booru.search('rule34.paheal.net', image_query, { limit: 1, random: true })
                .then(posts => {
                    if (posts.length === 0) {
                        const notfoundEmbed = new Discord.MessageEmbed()
                            .setDescription("Sorry, i found no results for what you're looking for.")
                            .setFooter("Are you sure you didn't do a typo?")
                        message.channel.send(notfoundEmbed)
                    }

                    for (let post of posts) {
                        const booruEmbed = new Discord.MessageEmbed()
                            .setTitle('P-Pervert!')
                        .setColor('#FFC0CB')
                            .setDescription("I guess i still had to do what master says...")
                            .addField('Provided by Rule34.paheal.net', `[Booru Page](${post.postView})`)
                            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                            .setImage(post.fileUrl)
                            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                            .setTimestamp();

                        message.channel.send(booruEmbed);
                    }
                })
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Returns an image from Rule34.', '`nabe paheal <optional query>`')
                .setFooter('Example: nabe paheal narberal_gamma')
            message.channel.send(helpEmbed)
          if (message.content.includes('narberal_gamma')) {
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('NO LEWDING NABE!')
                .setDescription('My creator told me to burn every insects that seeks to lewd myself.')
            .setImage('https://user-images.githubusercontent.com/79780581/140713738-91db6652-53ab-4be7-b57e-7eb8a1bd5c8e.jpg')
                .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                            .setTimestamp();
            message.channel.send(helpEmbed)
        }
    }
}
