const fetch = require('node-fetch')
const Booru = require('booru')
const Discord = require('discord.js')
const { escapeMarkdown } = Discord.Util
const path = require('path')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "booru",
        description: "I will send a media that i found on Gelbooru.",
        usage: "[tags (use underscore to join, and use space to separate tags.)]",
        cooldown: 10,
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

        var split = tag_query.split(' ');
        var limit_amount = split.pop();
        if (!isNaN(limit_amount)) {
            var lastIndex = tag_query.lastIndexOf(" ");
            tag_query = tag_query.substring(0, lastIndex);
        }
        if (isNaN(limit_amount)) limit_amount = 1;
        if (limit_amount < 1) return message.channel.send(`_You told me to return 0 results so here's 0 results..._`);

        await Booru.search('gelbooru.com', tag_query, { limit: limit_amount, random: true })
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
                        .setDescription(
                            `**[Gelbooru Page](${post.postView})** | ` +
                            `**Rating:** ${post.rating.toUpperCase()} | \n` +
                            `**Tags:** ${tags}`
                        )
                        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899534056356724756/sketch-1634535999710.png?width=499&height=499')

                    var booruPost = post.fileUrl

                    const tanyaImage = 'https://cdn.discordapp.com/attachments/898563395807232061/964952354136936448/saga_feat.jpg'
                    const shizuImage = 'https://cdn.discordapp.com/attachments/898563395807232061/964956328156090480/48dc1ae6a3936e64ae748729d72c4655.jpg'
                    const nabeImage = 'https://user-images.githubusercontent.com/79780581/140713738-91db6652-53ab-4be7-b57e-7eb8a1bd5c8e.jpg'

                    if (post.tags.includes('narberal_gamma') && post.rating.includes('e')) {
                        booruPost = nabeImage
                    }
                    if (post.tags.includes('tanya_degurechaff') && post.rating.includes('e')) {
                        booruPost = tanyaImage
                    }
                    if (post.tags.includes('cz2128_delta') && post.rating.includes('e')) {
                        booruPost = shizuImage
                    }
                    if (post.tags.includes('furry')) {
                        booruPost = tanyaImage
                    }

                    if (tooBig) {
                        message.channel.send(booruEmbed);
                        message.channel.send('**`The file is over 50MB and will not be embeddable.`**')
                    }
                    if (imgError){
                        message.channel.send(booruEmbed)
                        message.channel.send('**`Sorry, but there was an error getting the file.`**')
                    }
                    if (!message.channel.nsfw && post.rating.includes('e')) {
                        message.channel.send(booruEmbed);
                        message.channel.send('**`I cannot display a NSFW post in a SFW channel. Please use this command in a NSFW channel to display explicit posts.`**')
                    }
                    if (!message.channel.nsfw && post.rating.includes('q')) {
                        message.channel.send(booruEmbed);
                        message.channel.send(`|| ${booruPost} ||`)
                    }
                    if (!message.channel.nsfw && post.rating.includes('s')) {
                        message.channel.send(booruEmbed);
                        message.channel.send(booruPost)
                    }
                    if (message.channel.nsfw && post.rating.includes('e')) {
                        message.channel.send(booruEmbed);
                        message.channel.send(booruPost)
                    }
                }
            })
        const footerEmbed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
            .setTimestamp();
        await message.channel.send(footerEmbed)
    }
}
