module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(client, message, args, Discord) {
    
        const target = message.mentions.users.first();
        if (!message.content.includes('help'))
        if (message.member.hasPermission('MUTE_MEMBERS')) {
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}>, you are now permitted to speak.`);
        } else{
            message.reply("please mention the person that you want to forgive and be allowed to speak again.").then(msg => { msg.delete({ timeout: 5000 }) });
        }
        }else {
            message.reply("i'm sorry, but you do not have the authority to kick members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Unmutes a user on text channels.', '`nabe unmute <mention>`')
                .setFooter('Example: nabe unmute @GOLOK_KU#0500')
            message.channel.send(helpEmbed)
        }
    }
}
