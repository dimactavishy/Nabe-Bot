const fetch = require('node-fetch')
const Booru = require('booru')
const Discord = require('discord.js')
const { escapeMarkdown } = Discord.Util
const path = require('path')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "r34",
        description: "I will send a lewd media that i found on Rule34.xxx.",
        usage: "[tags (use underscore to join, and use space to separate tags.)]",
        cooldown: 15,
    },
    async execute(client, message, args, Discord) {
        const fetch = require('node-fetch')
        var tag_query = args.join(' ');

        function fileSizeSI(a, b, c, d, e) {
            return (
                ((b = Math),
                    (c = b.log),
                    (d = 1e3),
                    (e = (c(a) / c(d)) | 0),
                    a / b.pow(d, e)).toFixed(0) + (e ? 'kMGTPEZY'[--e] + 'B' : ' Bytes')
            )
        }

        if (!message.content.includes('narberal_gamma')) {
            const hornyEmbed = new Discord.MessageEmbed()
                .setTitle('No lewding here!')
                .setDescription('Not everybody is a pervert like you, please do it in a NSFW channel.')
                .setImage('https://preview.redd.it/es6a4gux9il41.jpg?width=960&crop=smart&auto=webp&s=c8e81dfaa8d9bec7fa9bdd4addd59807d800a541')
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();
            if (!message.channel.nsfw) return message.channel.send(hornyEmbed)

            var split = tag_query.split(' ');
            var limit_amount = split.pop();
            if (!isNaN(limit_amount)) {
                var lastIndex = tag_query.lastIndexOf(" ");
                tag_query = tag_query.substring(0, lastIndex);
            }
            if (isNaN(limit_amount)) limit_amount = 1;
            if (limit_amount < 1) return message.channel.send(`_You told me to return 0 results so here's 0 results..._`);

            await Booru.search('rule34.xxx', tag_query, { limit: limit_amount, random: true })
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

                        embed_nsfw = new Discord.MessageEmbed()
                            .setTitle('P-Pervert!')
                            .setColor('#FFC0CB')
                            .setDescription(
                                `**[Rule34 Page](${post.postView})** | ` +
                                `**Rating:** ${post.rating.toUpperCase()} | ` +
                                `**Tags:** ${tags}`
                            )
                            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183711882199040/sketch-1636359767759.png?width=499&height=499')

                        var booruPost = post.fileUrl

                        const tanyaImage = 'https://cdn.discordapp.com/attachments/898563395807232061/964952354136936448/saga_feat.jpg'
                        const shizuImage = 'https://cdn.discordapp.com/attachments/898563395807232061/964956328156090480/48dc1ae6a3936e64ae748729d72c4655.jpg'
                        const nabeImage = 'https://user-images.githubusercontent.com/79780581/140713738-91db6652-53ab-4be7-b57e-7eb8a1bd5c8e.jpg'

                        if (post.tags.includes('narberal_gamma')) {
                            booruPost = nabeImage
                        }
                        if (post.tags.includes('tanya_degurechaff')) {
                            booruPost = tanyaImage
                        }
                        if (post.tags.includes('cz2128_delta')) {
                            booruPost = shizuImage
                        }
                        if (post.tags.includes('furry')) {
                            booruPost = tanyaImage
                        }

                        if (tooBig) {
                            message.channel.send(embed_nsfw);
                            message.channel.send('**`The file is over 50MB and will not be embeddable.`**')
                        }
                        if (imgError) {
                            message.channel.send(embed_nsfw)
                            message.channel.send('**`Sorry, but there was an error getting the file.`**')
                        }
                        if (!tooBig && !imgError) {
                            message.channel.send(embed_nsfw);
                            message.channel.send(booruPost)
                        }
                    }
                })
            const footerEmbed = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();
            await message.channel.send(footerEmbed)
        }
        if (message.content.includes('narberal_gamma')) {
            const helpEmbed = new Discord.MessageEmbed()
                .setTitle('No Lewding Nabe!')
                .setDescription('I will burn you like a roasted chicken if you still insist on lewding me.')
                .setImage('https://user-images.githubusercontent.com/79780581/140713738-91db6652-53ab-4be7-b57e-7eb8a1bd5c8e.jpg')
                .setFooter('Very Angry Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                .setTimestamp();
            message.channel.send(helpEmbed)
        }

    }
}
