
const Booru = require('booru')
const Color = `RANDOM`;
module.exports = {
    info: {
        name: "booru",
        description: "booru image scraper",
        cooldown: 30,
    },
    async execute(client, message, args, Discord) {
        const tag_query = args.join(' ');
        if (!message.content.includes('help')) {
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

           Booru.search('rule34.paheal.net', tag_query, { limit: 100, random: false })
           .then(posts => {
             if (posts.length === 0) {
             console.log('No images found.')
           }
               const randomPost = posts[Math.floor(Math.random() * posts.length)];
               for (let post of posts) {
                randomPost = Math.floor(Math.random() * posts.length);
                message.channel.send(randomPost.fileUrl);
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


