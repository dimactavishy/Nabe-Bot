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

        mySauce("https://safebooru.org//images/2814/c4ca50c9077041b1de0408d349ba52e23e5bf503.jpg", { results: 10})
        .then(response => {
            console.log('request sucessful');
            if (response.length < 1) return message.channel.send("No image was found!");
        });
        //const results = await client("http://i.imgur.com/5yFTeRV.png");

    }
}