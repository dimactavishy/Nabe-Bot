module.exports = {
    name: 'ping',
    description: "Ping me as you please.",
    execute(client, message, args, Discord) {

        message.channel.send('p-pong?');
    }
}