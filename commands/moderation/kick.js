module.exports = {
    name: 'kick',
    description: "kick command",
    execute(client, message, args, Discord) {

        if (!message.content.includes('help'))
        if (message.member.hasPermission('KICK_MEMBERS')) {
            let member = message.mentions.members.first();
            if (!member) return message.reply("mention the fool who dares anger my master, and i will get rid of that person as soon as possible.").then(msg => { msg.delete({ timeout: 5000 }) });
            if (!member.bannable) return message.reply("sorry, but the person you are trying to kick has a higher authority than me.").then(msg => { msg.delete({ timeout: 5000 }) });

            member.ban();
            message.reply("done. I have kicked the fool who angered you out of this server.");
        } else {
            message.reply("i'm sorry, but you do not have the authority to kick members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Kicks a user from the guild.', '`nabe kick <mention>`')
                .setFooter('Example: nabe kick @GOLOK_KU#0500')
            message.channel.send(helpEmbed)
        }

    }
}