module.exports = {
    info: {
        name: "str",
        description: "-",
        usage: "template",
        cooldown: 0,
    },
    execute(client, message, args, Discord) {

        var str = "lorem ipsum dolor sit amet";
        var split = str.split(' ');
        var lastIndex = str.lastIndexOf(" ");
        str = str.substring(0, lastIndex);
        var pop = split.pop();

        message.channel.send(str)
        message.channel.send(pop)
    }
}