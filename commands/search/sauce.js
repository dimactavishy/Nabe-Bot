/*const SauceNAO = require('saucenao')
let mySauce = new SauceNAO('05d0753bbec2836f3709bef097fda361857a8a62')*/

module.exports = {
    info: {
        name: "sauce",
        description: `I will try to find the source of your desired image. Powered by [SauceNao](https://saucenao.com/)`,
        usage: "[query (separate with spaces)]",
        cooldown: 20,
    },

    execute: async function (client, message, args) {
    
        message.channel.send('eek luh kawaki');

        /*let sauce = (await SauceNAO('https://safebooru.org//images/2814/c4ca50c9077041b1de0408d349ba52e23e5bf503.jpg')).json

        mySauce(imageDataBuffer).then((response) => {
            console.log('Request successful')
            console.dir(response.json)
        }, (error) => {
            console.error('Request encountered an error')
            console.dir(error.request)
        })*/

    }
}