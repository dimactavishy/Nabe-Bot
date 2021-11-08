module.exports = {
    name: 'ban',
    description: "ban command",
    execute(client, message, args, Discord) {
        if (!message.content.includes('help')) 
        if (message.member.hasPermission('BAN_MEMBERS')) {
            let member = message.mentions.members.first();
            if (!member) return message.reply("mention the fool who dares anger my master, and i will erase that person as soon as possible.").then(msg => { msg.delete({ timeout: 5000 }) });
            if (!member.bannable) return message.reply("sorry, but the person you are trying to ban has a higher authority than me.").then(msg => { msg.delete({ timeout: 5000 }) });

            member.ban();
            message.reply("Even insects smell good when roasted.");
        } else {
            message.reply("i'm sorry, but you do not have the authority to ban members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Bans a user from the guild.', '`nabe ban <mention>`')
                .setFooter('Example: nabe ban @GOLOK_KU#0500')
            message.channel.send(helpEmbed)
        }

    }
}