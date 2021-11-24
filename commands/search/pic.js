module.exports = {
    info: {
        name: "pic",
        description: "I will find an image on the web.",
        usage: "[query]",
        cooldown: 60,
    },
    execute(client, message, args, Discord) {
        const picEmbed = new Discord.MessageEmbed()
        .setDescription("`pic` is disabled!")
            .setTimestamp()
    
        message.channel.send(picEmbed);
    }
}
