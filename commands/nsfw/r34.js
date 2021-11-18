const fetch = require('node-fetch')
const Booru = require('booru')
const Discord = require('discord.js')
const { escapeMarkdown } = Discord.Util
const path = require('path')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "r34",
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

        if (!message.content.includes('help')) {
            if (!message.content.includes('narberal_gamma')) {
                const hornyEmbed = new Discord.MessageEmbed()
                    .setTitle('No lewding here!')
                    .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                    .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                    .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();
                if (!message.channel.nsfw) return message.channel.send(hornyEmbed)

                Booru.search('rule34.xxx', tag_query, { limit: 1, random: true })
                    .then(async posts => {
                        /*const filtered = posts.blacklist(['furry', 'narberal_gamma', '3d'])*/
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
                                tooBig = parseInt(headers.get('content-length'), 10) / 1000000 > 10
                            }

                            embed_nsfw = new Discord.MessageEmbed()
                                .setTitle('P-Pervert!')
                                .setColor('#FFC0CB')
                                .setDescription(`H-Here's something i found on rule34!\n` +
                                    `**Site:** Rule34.xxx | ` +
                                    `[**Booru Page**](${post.postView}) | ` +
                                    `**Rating:** ${post.rating.toUpperCase()} | ` +
                                    `**File:** ${path.extname(post.fileUrl).toUpperCase()}, ${headers ? fileSizeSI(headers.get('content-length')) : '? kB'}\n` +
                                    `**Tags:** ${tags}\n\n` +
                                    (!['.jpg', '.jpeg', '.png', '.gif'].includes(
                                        path.extname(post.fileUrl).toLowerCase(),
                                    )
                                        ? '**`The file will probably not embed, so i will send a separate message instead.`**'
                                        : '') +
                                    (tooBig ? '\n**`The image is over 10MB and will probably not embed.`**' : '') +
                                    (imgError ? '\n**`I got an error while trying to get the image.`**' : ''),
                                )
                                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')
                                .setImage(post.fileUrl)
                                .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                                .setTimestamp();
                            message.channel.send(embed_nsfw);

                            if (!['.jpg', '.jpeg', '.png', '.gif'].includes(
                                path.extname(post.fileUrl).toLowerCase())) {
                                message.channel.send(post.fileUrl)
                            }

                            if (tooBig && ['.jpg', '.jpeg', '.png', '.gif'].includes(
                                path.extname(post.fileUrl).toLowerCase())) {
                                message.channel.send(post.fileUrl)
                            }

                        }
                    })
            }
            if (message.content.includes('narberal_gamma')) {
                const helpEmbed = new Discord.MessageEmbed()
                    .setTitle('No Lewding Nabe!')
                    .setDescription('I will burn you like a roasted chicken if you still insist on lewding me.')
                    .setImage('https://user-images.githubusercontent.com/79780581/140713738-91db6652-53ab-4be7-b57e-7eb8a1bd5c8e.jpg')
                    .setFooter('Very Angry Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                    .setTimestamp();
                message.channel.send(helpEmbed)
            }
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Returns an image from rule34', '`nabe r34 <optional query>`')
                .setFooter('Example: nabe r34 narberal_gamma')
            message.channel.send(helpEmbed)
        }
    }
}
