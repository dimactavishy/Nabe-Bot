const Discord = require('discord.js')
const sagiri = require("sagiri");


module.exports = {
    info: {
        name: "sauce",
        description: `I will try to find the source of your desired image. Powered by [SauceNao](https://saucenao.com/)`,
        usage: "[query (separate with spaces)]",
        cooldown: 20,
    },

    async execute(client, message, args, Discord) {

        let mySauce = sagiri("05d0753bbec2836f3709bef097fda361857a8a62");

        if (message.attachments.size > 0) {

            message.attachments.forEach(attachment => {
                let imageurl = attachment.url;
                mySauce(imageurl, { results: 10 })
                    .then(async response => {

                        const sauceEmbed = new Discord.MessageEmbed()
                            .setColor('#ADD8E6')
                            .setTitle('Looking For Sauce?')
                            .setThumbnail(response[0].thumbnail)
                            .setDescription(
                                `**Result 1**\n`
                                + `**By [${response[0].authorName}](${response[0].authorUrl})**\n`
                                + `**Site:** ${response[0].site} | `
                                + `**Similarity:** ${response[0].similarity}\n`
                                + `[${response[0].site} Page](${response[0].url})`
                            )
                        if (response[0].authorName == null) {
                            sauceEmbed.setDescription(
                                `**Result 1**\n`
                                + `**Site:** ${response[0].site} | `
                                + `**Similarity:** ${response[0].similarity}\n`
                                + `[${response[0].site} Page](${response[0].url})`
                            )
                        }

                        const sauceEmbed2 = new Discord.MessageEmbed()
                            .setColor('#ADD8E6')
                            .setThumbnail(response[1].thumbnail)
                            .setDescription(
                                `**Result 2**\n`
                                + `**By [${response[1].authorName}](${response[1].authorUrl})**\n`
                                + `**Site:** ${response[1].site} | `
                                + `**Similarity:** ${response[1].similarity}\n`
                                + `[${response[1].site} Page](${response[1].url})`
                            )
                        if (response[1].authorName == null) {
                            sauceEmbed2.setDescription(
                                `**Result 1**\n`
                                + `**Site:** ${response[1].site} | `
                                + `**Similarity:** ${response[1].similarity}\n`
                                + `[${response[1].site} Page](${response[1].url})`
                            )
                        }

                        const sauceEmbed3 = new Discord.MessageEmbed()
                            .setColor('#ADD8E6')
                            .setThumbnail(response[2].thumbnail)
                            .setDescription(
                                `**Result 3**\n`
                                + `**By [${response[2].authorName}](${response[2].authorUrl})**\n`
                                + `**Site:** ${response[2].site} | `
                                + `**Similarity:** ${response[2].similarity}\n`
                                + `[${response[2].site} Page](${response[2].url})`
                            )
                            .setFooter('Egg-Shaped Battle Maid | Sauce provided by SauceNAO.com', client.user.displayAvatarURL())
                            .setTimestamp()
                        if (response[2].authorName == null) {
                            sauceEmbed3.setDescription(
                                `**Result 1**\n`
                                + `**Site:** ${response[2].site} | `
                                + `**Similarity:** ${response[2].similarity}\n`
                                + `[${response[2].site} Page](${response[2].url})`
                            )
                        }

                        console.log(response);

                        async function validateForm() {
                            var similarity = response[0].similarity;
                            var simrequirement = 85;

                            if (Number(similarity) > Number(simrequirement)) {
                                message.channel.send(sauceEmbed)
                                await message.channel.send(sauceEmbed2)
                                await message.channel.send(sauceEmbed3)
                            } else {
                                message.reply("Sorry, i couldn't find any similar image.")
                            }
                        }
                        if (response.length < 1) return message.reply("Sorry, i couldn't find any similar image.");
                    });
            });

        }

        if (!message.attachments.size > 0) {
            message.reply("please provide an image!")
        }
        //const results = await client("http://i.imgur.com/5yFTeRV.png");

    }
}
