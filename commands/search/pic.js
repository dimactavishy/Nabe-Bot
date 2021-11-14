module.exports = {
    name: 'pic',
    cooldown: 30,
    description: "pic disable",
    execute(client, message, args, Discord) {
        if (!message.content.includes('help')) {
        const picEmbed = new Discord.MessageEmbed()
        .setDescription("`pic` is disabled!")
            .setTimestamp()
    
        message.channel.send(picEmbed);
}
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField("If you're seeing this, 'pic' is currently disabled.", '`nabe pic <query>`')
                .setFooter('Example: nabe pic indomie')
            message.channel.send(helpEmbed)
        }
    }
}
