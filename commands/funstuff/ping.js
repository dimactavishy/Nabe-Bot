module.exports = {
    info: {
        name: "ping",
        description: "A simple ping-pong command.",
        usage: "",
        cooldown: 0,
    },
    execute(client, message, args, Discord) {

        message.channel.send('p-pong?');
    }
}