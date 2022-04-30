module.exports = {
    info: {
        name: "propaganda",
        description: "-",
        usage: "propaganda",
        cooldown: 0,
    },
    execute(client, message, args, Discord) {
        message.channel.send(`You are **___NOT___** immune to propaganda.`)
    }
}