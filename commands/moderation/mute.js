const ms = require('ms');
module.exports = {
    info: {
        name: "mute",
        description: "Mute a user on text channels.",
        usage: "[usermention] [optional time]",
        cooldown: 0,
    },
    execute(client, message, args, Discord) {

        const target = message.mentions.users.first();
        if (message.member.hasPermission('MUTE_MEMBERS')) {
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`silence! <@${memberTarget.user.id}> do not anger my master.`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`silence! <@${memberTarget.user.id}> do not anger my master. I will allow you to speak again in ${ms(ms(args[1]))}.`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.reply("Mention the person whom you want to silence, and i will do so to them.").then(msg => { msg.delete({ timeout: 5000 }) });
            }
        } else {
            message.reply("i'm sorry, but you do not have the authority to mute members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }

    }
}
