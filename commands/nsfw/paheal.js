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
        if (!message.content.includes('help')){
            const hornyEmbed = new Discord.MessageEmbed()
                    .setTitle('No lewding here!')
                    .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                    .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                    .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();
                if (!message.channel.nsfw) return message.channel.send(hornyEmbed)
            Booru.search('rule34.paheal.net', image_query, { limit: 1, random: false })
                .then(posts => {
                    if (posts.length === 0) {
                        const notfoundEmbed = new Discord.MessageEmbed()
                            .setDescription("Sorry, i found no results for what you're looking for.")
                            .setFooter("Are you sure you didn't do a typo?")
                        message.channel.send(notfoundEmbed)
                    }
                    const postRandom = Booru.search[Math.floor(Math.random() * image_results.length)];
                    for (let post of posts) {
                        const booruEmbed = new Discord.MessageEmbed()
                            .setTitle('P-Pervert!')
                            .setColor('#FFC0CB')
                            .setDescription("H-here's the image i found on paheal...")
                            .addField('Provided by Rule34.paheal.net', `[Booru Page](${postRandom.postView})`)
                            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                            .setImage(postRandom.fileUrl)
                            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                            .setTimestamp();

                        message.channel.send(booruEmbed);
                    }
                })
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Returns a NSFW image from rule34.paheal', '`nabe paheal <optional query>`')
                .setFooter('Example: nabe paheal narberal_gamma')
            message.channel.send(helpEmbed)
        }
    }
}
