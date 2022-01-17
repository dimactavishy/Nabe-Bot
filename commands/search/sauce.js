const Discord = require('discord.js')
const sagiri = require("sagiri");

module.exports = {
    info: {
        name: "sauce",
        description: `I will try to find the source of your desired image. Powered by [SauceNao](https://saucenao.com/)`,
        usage: "[optional amount]",
        cooldown: 20,
    },

    async execute(client, message, args, Discord) {

        let mySauce = sagiri("05d0753bbec2836f3709bef097fda361857a8a62");

        if (message.attachments.size > 0) {

            message.attachments.forEach(attachment => {
                let imageurl = attachment.url;

                let amount = args.join( );

                if (!amount) amount = 3;
                if (amount > 7) return message.reply("I'm sorry, but the maximum number of sauce results is 7 to avoid channel flooding.").then(msg => { msg.delete({ timeout: 5000 }) });
                if (amount < 0) return message.reply("Forgive me, but specifying a number smaller than one would induce a paradox. So please, specify a greater number.").then(msg => { msg.delete({ timeout: 5000 }) });
                if (isNaN(amount)) return message.reply("Please only enter a number between 1 to 7 or none at all.").then(msg => { msg.delete({ timeout: 5000 }) });

                mySauce(imageurl, { results: 2 })
                    .then(async response => {

                        console.log(response);
                        console.log(amount);

                        if (response[0].similarity > 85) {

                            const titleEmbed = new Discord.MessageEmbed()
                                .setColor('#ADD8E6')
                                .setTitle('Looking For Sauce?')
                            message.channel.send(titleEmbed)

                            //embed 1
                            if (amount = [1, 2, 3, 4, 5, 6, 7]) {
                                const sauceEmbed = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[0].thumbnail)
                                    .setDescription(
                                        `**Result 1**\n`
                                        + `**By [${response[0].authorName}](${response[0].authorUrl})**\n`
                                        + `**Site:** ${response[0].site} | `
                                        + `**Similarity:** ${response[0].similarity}\n`
                                        + `**[${response[0].site} Page](${response[0].url})**`
                                    )
                                if (response[0].authorName == null) {
                                    sauceEmbed.setDescription(
                                        `**Result 1**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[0].site} | `
                                        + `**Similarity:** ${response[0].similarity}\n`
                                        + `**[${response[0].site} Page](${response[0].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed)
                            }

                            //embed 2
                            if (amount = [2, 3, 4, 5, 6, 7]) {
                                const sauceEmbed2 = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[1].thumbnail)
                                    .setDescription(
                                        `**Result 2**\n`
                                        + `**By [${response[1].authorName}](${response[1].authorUrl})**\n`
                                        + `**Site:** ${response[1].site} | `
                                        + `**Similarity:** ${response[1].similarity}\n`
                                        + `**[${response[1].site} Page](${response[1].url})**`
                                    )
                                if (response[1].authorName == null) {
                                    sauceEmbed2.setDescription(
                                        `**Result 2**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[1].site} | `
                                        + `**Similarity:** ${response[1].similarity}\n`
                                        + `**[${response[1].site} Page](${response[1].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed2)
                            }

                            //embed 3
                            if (amount = [3, 4, 5, 6, 7]) {
                                const sauceEmbed3 = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[2].thumbnail)
                                    .setDescription(
                                        `**Result 3**\n`
                                        + `**By [${response[2].authorName}](${response[2].authorUrl})**\n`
                                        + `**Site:** ${response[2].site} | `
                                        + `**Similarity:** ${response[2].similarity}\n`
                                        + `**[${response[2].site} Page](${response[2].url})**`
                                    )
                                if (response[2].authorName == null) {
                                    sauceEmbed3.setDescription(
                                        `**Result 3**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[2].site} | `
                                        + `**Similarity:** ${response[2].similarity}\n`
                                        + `**[${response[2].site} Page](${response[2].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed3)
                            }

                            //embed 4
                            if (amount = [4, 5, 6, 7]) {
                                const sauceEmbed4 = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[3].thumbnail)
                                    .setDescription(
                                        `**Result 4**\n`
                                        + `**By [${response[3].authorName}](${response[3].authorUrl})**\n`
                                        + `**Site:** ${response[3].site} | `
                                        + `**Similarity:** ${response[3].similarity}\n`
                                        + `**[${response[3].site} Page](${response[3].url})**`
                                    )
                                if (response[3].authorName == null) {
                                    sauceEmbed4.setDescription(
                                        `**Result 4**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[3].site} | `
                                        + `**Similarity:** ${response[3].similarity}\n`
                                        + `**[${response[3].site} Page](${response[3].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed4)
                            }

                            //embed 5
                            if (amount = [5, 6, 7]) {
                                const sauceEmbed5 = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[4].thumbnail)
                                    .setDescription(
                                        `**Result 5**\n`
                                        + `**By [${response[4].authorName}](${response[4].authorUrl})**\n`
                                        + `**Site:** ${response[4].site} | `
                                        + `**Similarity:** ${response[4].similarity}\n`
                                        + `**[${response[4].site} Page](${response[4].url})**`
                                    )
                                if (response[4].authorName == null) {
                                    sauceEmbed5.setDescription(
                                        `**Result 5**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[4].site} | `
                                        + `**Similarity:** ${response[4].similarity}\n`
                                        + `**[${response[4].site} Page](${response[4].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed5)
                            }

                            //embed 6
                            if (amount = [6, 7]) {
                                const sauceEmbed6 = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[5].thumbnail)
                                    .setDescription(
                                        `**Result 6**\n`
                                        + `**By [${response[5].authorName}](${response[5].authorUrl})**\n`
                                        + `**Site:** ${response[5].site} | `
                                        + `**Similarity:** ${response[5].similarity}\n`
                                        + `**[${response[5].site} Page](${response[5].url})**`
                                    )
                                if (response[5].authorName == null) {
                                    sauceEmbed6.setDescription(
                                        `**Result 6**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[5].site} | `
                                        + `**Similarity:** ${response[5].similarity}\n`
                                        + `**[${response[5].site} Page](${response[5].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed6)
                            }
    
                            //embed 7
                            if (amount = [7]) {
                                const sauceEmbed7 = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setThumbnail(response[6].thumbnail)
                                    .setDescription(
                                        `**Result 7**\n`
                                        + `**By [${response[6].authorName}](${response[6].authorUrl})**\n`
                                        + `**Site:** ${response[6].site} | `
                                        + `**Similarity:** ${response[6].similarity}\n`
                                        + `**[${response[6].site} Page](${response[6].url})**`
                                    )
                                if (response[6].authorName == null) {
                                    sauceEmbed7.setDescription(
                                        `**Result 7**\n`
                                        + `**From [Imageboard](https://en.wikipedia.org/wiki/Imageboard)**\n`
                                        + `**Site:** ${response[6].site} | `
                                        + `**Similarity:** ${response[6].similarity}\n`
                                        + `**[${response[6].site} Page](${response[6].url})**`
                                    )
                                }
                                await message.channel.send(sauceEmbed7)
                            }

                            const footEmbed = new Discord.MessageEmbed()
                                .setColor('#ADD8E6')
                                .setDescription(`***Sauce provided by [SauceNAO.com](https://saucenao.com)***`)
                                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                                .setTimestamp()
                            await message.channel.send(footEmbed)

                        } else {
                            message.reply("Sorry, i couldn't find any similar image.")
                        }

                        if (response.length < 1) return message.reply("Sorry, i couldn't find any similar image.");
                    });
            });

        }

        if (!message.attachments.size > 0) {
            message.reply("Please provide an image, i can't read your mind.")
        }
    }
}
