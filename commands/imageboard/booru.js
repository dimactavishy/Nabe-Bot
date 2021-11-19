const fetch = require('node-fetch')
const Booru = require('booru')
const Discord = require('discord.js')
const { escapeMarkdown } = Discord.Util
const path = require('path')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "booru",
        description: "booru image scraper",
        cooldown: 30,
    },
    async execute(client, message, args, Discord) {
        const fetch = require('node-fetch')
        const tag_query = args.join(' ');
        
        function fileSizeSI(a, b, c, d, e) {
            return (
                ((b = Math),
                    (c = b.log),
                    (d = 1e3),
                    (e = (c(a) / c(d)) | 0),
                    a / b.pow(d, e)).toFixed(0) + (e ? 'kMGTPEZY'[--e] + 'B' : ' Bytes')
            )
        }
        
        if (!message.content.includes('help')){
            const hornyEmbed = new Discord.MessageEmbed()
                .setTitle('Potential Lewd Warning')
                .setDescription('**The `nabe booru` command has a potential to return a NSFW image.\n**'
                               + 'Please use this command in a NSFW channel just to be safe.\n\n'
                               + '_If you really want to use booru on a SFW channel, use `nabe boorusafe` instead._'
                               )
                .setImage('https://static.wikia.nocookie.net/isekai-quartet/images/9/9c/Narberal_Gamma.png/revision/latest?cb=20200313155041')
                .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                .setTimestamp();
            if (!message.channel.nsfw) return message.channel.send(hornyEmbed);
            
            Booru.search('gelbooru.com', tag_query, { limit: 1, random: true })
                .then(async posts => {
                        if (posts.length === 0) {
                            const notfoundEmbed = new Discord.MessageEmbed()
                                .setDescription("Sorry, i found no results for what you're looking for.")
                                .setFooter("Are you sure you didn't do a typo?")
                            message.channel.send(notfoundEmbed)
                        }

                    for (let post of posts) {
                        
                        let tags =
                                post.tags.join(', ').length < 50
                                    ? Discord.Util.escapeMarkdown(post.tags.join(', '))
                                    : Discord.Util.escapeMarkdown(post.tags.join(', ').substr(0, 50)) +
                                    `... [See All](https://giraffeduck.com/api/echo/?w=${Discord.Util
                                        .escapeMarkdown(post.tags.join(',').replace(/(%20)/g, '_'))
                                        .replace(/([()])/g, '\\$1')
                                        .substring(0, 1200)})`

                            let headers
                            let tooBig = false
                            let imgError = false

                            try {
                                headers = (await fetch(post.fileUrl, { method: 'HEAD' })).headers
                            } catch (e) {
                                imgError = true
                            }

                            if (headers) {
                                tooBig = parseInt(headers.get('content-length'), 50) / 1000000 > 10
                            }
                        
                        const booruEmbed = new Discord.MessageEmbed()
                            .setColor('YELLOW')
                            .setTitle("Here's an image for you, master.")
                            .setDescription(`I hope this result satisfies you.\n` +
                                    `**Gelbooru.com** | ` +
                                    `[**Booru Page**](${post.postView}) | ` +
                                    `**Rating:** ${post.rating.toUpperCase()} | ` +
                                    `**File:** ${path.extname(post.fileUrl).toUpperCase()}, ${headers ? fileSizeSI(headers.get('content-length')) : '? kB'}\n` +
                                    `**Tags:** ${tags}\n\n` +
                                    (!['.jpg', '.jpeg', '.png', '.gif'].includes(
                                        path.extname(post.fileUrl).toLowerCase(),
                                    )
                                        ? '**`The file is perhaps a video and will not be embeddable.`**\n'
                                        : '') +
                                    (tooBig && ['.jpg', '.jpeg', '.png', '.gif'].includes(
                                        path.extname(post.fileUrl).toLowerCase(),
                                    )
                                        ? '**`The image is over 50MB and will not be embeddable.`**\n' : '') +
                                    (imgError ? '**`Sorry, but there was an error getting the file.\n`**' : ''),
                                           
                                           )
                            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')
                            .setImage(post.fileUrl)
                            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                            .setTimestamp();

                        message.channel.send(booruEmbed);
                        
                        if (!['.jpg', '.jpeg', '.png', '.gif'].includes(
                                path.extname(post.fileUrl).toLowerCase())) {
                                message.channel.send(`*The file is not embeddable, so here's the link instead:*\n`
                                + post.fileUrl
                               )
                            }

                            if (tooBig && ['.jpg', '.jpeg', '.png', '.gif'].includes(
                                path.extname(post.fileUrl).toLowerCase())) {
                                message.channel.send(`*The file is over 50MB, so here's the link instead:*\n`
                                + post.fileUrl
                               )
                            }
                        
                    }
                })
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Returns an image from gelbooru', '`nabe booru <optional query>`')
                .setFooter('Example: nabe booru narberal_gamma')
            message.channel.send(helpEmbed)
        }
    }
}
