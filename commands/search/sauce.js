const sagiri = require("sagiri");

module.exports = {
    info: {
        name: "sauce",
        description: `I will try to find the source of your desired image. Powered by [SauceNao](https://saucenao.com/)`,
        usage: "[query (separate with spaces)]",
        cooldown: 20,
    },

    execute: async function (client, message, args) {

        let mySauce = sagiri("05d0753bbec2836f3709bef097fda361857a8a62");

        if (message.attachments.size > 0) {

            message.attachments.forEach(attachment => {
                let imageurl = attachment.url;
                mySauce(imageurl, { results: 10 })
                    .then(response => {

            const sauceEmbed = new MessageEmbed()
            .setColor('#ADD8E6')
            .setTitle('Looking For Sauce?')
            .setURL(response[0].url)
            .setThumbnail(response[0].thumbnail)
            .setDescription(
                `**By [${response[0].authorName}](${response[0].authorUrl})**\n`
                + `**Site: ${response[0].site} | `
                + `**${response[0].similarity}**\n`
                + `**[${response[0].site} Page](${response[0].url})`
            )
            .setFooter('Egg-Shaped Battle Maid | Sauce provided by SauceNAO.com', client.user.displayAvatarURL())
            .setTimestamp()
                        console.log(response);
                        if (response.length < 1) return message.channel.send("No image was found!");
                    });
            });

        }

        if (!message.attachments.size > 0) {
            message.reply("please provide an image!")
        }
        //const results = await client("http://i.imgur.com/5yFTeRV.png");

    }
}
