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

        if (message.attachments) {
            let file = message.attachments.first();

            message.attachments.forEach(attachment => {
                var imageurl = attachment.url;
              });

            mySauce(imageurl, { results: 1 })
                .then(response => {
                    console.log(response);
                    if (response.length < 1) return message.channel.send("No image was found!");
                });
        }
        //const results = await client("http://i.imgur.com/5yFTeRV.png");

    }
}