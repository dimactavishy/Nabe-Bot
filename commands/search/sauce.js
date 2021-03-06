const Discord = require('discord.js')
const sagiri = require("sagiri");

module.exports = {
    info: {
        name: "sauce",
        description: `I will try to find the source of your desired image. Powered by SauceNao.com`,
        usage: "[optional media link] [optional amount]",
        cooldown: 20,
    },

    async execute(client, message, args, Discord) {

        let mySauce = sagiri("05d0753bbec2836f3709bef097fda361857a8a62");

        const sauceMessage = args.join(" ");

        const embedLinks = sauceMessage.split(' ')

        console.log(embedLinks)

        if (message.attachments.size > 0 || sauceMessage) {

            if (sauceMessage) {

                let imageurl = embedLinks[0];

                let amount = embedLinks[1]

                if (!amount) amount = 1;
                if (amount > 5) return message.reply("I'm sorry, but the maximum number of sauce results is 5 to avoid channel flooding.").then(msg => { msg.delete({ timeout: 5000 }) });
                if (amount < 0) return message.reply("Forgive me, but specifying a number smaller than one would induce a paradox. So please, specify a greater number.").then(msg => { msg.delete({ timeout: 5000 }) });
                if (isNaN(amount)) return message.reply("Please only enter a number between 1 to 7 or none at all.").then(msg => { msg.delete({ timeout: 5000 }) });

                mySauce(imageurl, { results: 5 })
                    .then(async response => {

                        console.log(response);
                        console.log(amount);

                        if (response[0].similarity > 65) {

                            const titleEmbed = new Discord.MessageEmbed()
                                .setColor('#ADD8E6')
                                .setTitle('Looking For Sauce?')

                            //embed 1
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

                            //embed 2
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

                            //embed 3
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

                            //embed 4
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

                            //embed 5
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

                            const footEmbed = new Discord.MessageEmbed()
                                .setColor('#ADD8E6')
                                .setDescription(`***Sauce provided by [SauceNAO.com](https://saucenao.com)***`)
                                .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                                .setTimestamp()

                            message.channel.send(titleEmbed)
                            if (amount == 1) {
                                await message.channel.send(sauceEmbed)
                            }
                            if (amount == 2) {
                                await message.channel.send(sauceEmbed)
                                await message.channel.send(sauceEmbed2)
                            }
                            if (amount == 3) {
                                await message.channel.send(sauceEmbed)
                                await message.channel.send(sauceEmbed2)
                                await message.channel.send(sauceEmbed3)
                            }
                            if (amount == 4) {
                                await message.channel.send(sauceEmbed)
                                await message.channel.send(sauceEmbed2)
                                await message.channel.send(sauceEmbed3)
                                await message.channel.send(sauceEmbed4)
                            }
                            if (amount == 5) {
                                await message.channel.send(sauceEmbed)
                                await message.channel.send(sauceEmbed2)
                                await message.channel.send(sauceEmbed3)
                                await message.channel.send(sauceEmbed4)
                                await message.channel.send(sauceEmbed5)
                            }
                            await message.channel.send(footEmbed)

                        } else {
                            message.reply("Sorry, i couldn't find any similar image.")
                        }

                        if (response.length < 1) return message.reply("Sorry, i couldn't find any similar image.");
                    });
            }

            if (!sauceMessage) {
                message.attachments.forEach(attachment => {

                    let imageurl = attachment.url;

                    let amount = embedLinks[1]

                    if (!amount) amount = 1;
                    if (amount > 5) return message.reply("I'm sorry, but the maximum number of sauce results is 5 to avoid channel flooding.").then(msg => { msg.delete({ timeout: 5000 }) });
                    if (amount < 0) return message.reply("Forgive me, but specifying a number smaller than one would induce a paradox. So please, specify a greater number.").then(msg => { msg.delete({ timeout: 5000 }) });
                    if (isNaN(amount)) return message.reply("Please only enter a number between 1 to 7 or none at all.").then(msg => { msg.delete({ timeout: 5000 }) });

                    mySauce(imageurl, { results: 5 })
                        .then(async response => {

                            console.log(response);
                            console.log(amount);

                            if (response[0].similarity > 30) {

                                const titleEmbed = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setTitle('Looking For Sauce?')

                                //embed 1
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

                                //embed 2
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

                                //embed 3
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

                                //embed 4
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

                                //embed 5
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

                                const footEmbed = new Discord.MessageEmbed()
                                    .setColor('#ADD8E6')
                                    .setDescription(`***Sauce provided by [SauceNAO.com](https://saucenao.com)***`)
                                    .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
                                    .setTimestamp()

                                message.channel.send(titleEmbed)
                                if (amount == 1) {
                                    await message.channel.send(sauceEmbed)
                                }
                                if (amount == 2) {
                                    await message.channel.send(sauceEmbed)
                                    await message.channel.send(sauceEmbed2)
                                }
                                if (amount == 3) {
                                    await message.channel.send(sauceEmbed)
                                    await message.channel.send(sauceEmbed2)
                                    await message.channel.send(sauceEmbed3)
                                }
                                if (amount == 4) {
                                    await message.channel.send(sauceEmbed)
                                    await message.channel.send(sauceEmbed2)
                                    await message.channel.send(sauceEmbed3)
                                    await message.channel.send(sauceEmbed4)
                                }
                                if (amount == 5) {
                                    await message.channel.send(sauceEmbed)
                                    await message.channel.send(sauceEmbed2)
                                    await message.channel.send(sauceEmbed3)
                                    await message.channel.send(sauceEmbed4)
                                    await message.channel.send(sauceEmbed5)
                                }
                                await message.channel.send(footEmbed)

                            } else {
                                message.reply("Sorry, i couldn't find any similar image.")
                            }

                            if (response.length < 1) return message.reply("Sorry, i couldn't find any similar image.");
                        });
                });
            }

        }

        if (!message.attachments.size > 0 && !sauceMessage) {
            message.reply("Please provide an attachment, i can't read your mind.")
        }
    }
}
