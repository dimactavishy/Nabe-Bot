const Booru = require('booru')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "boorusafe",
        description: "booru image scraper",
        cooldown: 30,
    },
    async execute(client, message, args, Discord) {
        const image_query = args.join(' ');
        if (!message.content.includes('help'))
            Booru.search('safebooru', image_query, { limit: 1, random: true })
                .then(posts => {
                    if (posts.length === 0) {
                        const notfoundEmbed = new Discord.MessageEmbed()
                            .setDescription("Sorry, i found no results for what you're looking for.")
                            .setFooter("Are you sure you didn't do a typo?")
                        message.channel.send(notfoundEmbed)
                    }

                    for (let post of posts) {
                        const booruEmbed = new Discord.MessageEmbed()
                            .setColor('GREEN')
                            .setTitle("Here's an image for you, master.")
                            .setDescription("I hope this result satisfies you.")
                            .addField('Provided by Safebooru.org', `[Booru Page](${post.postView})`)
                            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                            .setImage(post.fileUrl)
                            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                            .setTimestamp();

                        message.channel.send(booruEmbed);
                    }
                })
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Returns an image from safebooru', '`nabe boorusafe <optional query>`')
                .setFooter('Example: nabe boorusafe narberal_gamma')
            message.channel.send(helpEmbed)
        }
    }
}