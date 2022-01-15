module.exports = {
    info: {
        name: "kick",
        description: "Kick a user from the guild.",
        usage: "[usermention] [optional reason]",
        cooldown: 0,
    },
    execute(client, message, args, Discord) {

        if (message.member.hasPermission('KICK_MEMBERS')) {
            let member = message.mentions.members.first();
            if (!member) return message.reply("mention the fool who dares anger my master, and i will get rid of that person as soon as possible.").then(msg => { msg.delete({ timeout: 5000 }) });

            let reason = args.slice(1).join(" ");
            if (!reason) reason = 'No reason has been given.';

            let guild = message.guild

            if (!member.kickable) return message.reply("sorry, but the person you are trying to kick has a higher authority than me.").then(msg => { msg.delete({ timeout: 5000 }) });

            let kickEmbed = new Discord.MessageEmbed()
                .setTitle('See you later!')
                .setColor('YELLOW')
                .setDescription(`_You have been kicked from **\`${guild.name}\`** for the following reason:_\n`
                    + `**\`\`\`${reason}\`\`\`**`
                )
                .setTimestamp()

            try {
                member.send(kickEmbed).catch(() => {message.reply("the user has a closed DM.")})
                .then(() => {member.kick()})
                message.channel.send("Done. I have kicked the fool who angered you out of this server.");
            } catch (err) {
                client.channels.cache.get(`918459447142141973`).send(err.message);
                client.channels.cache.get(`918459447142141973`).send('<@291847323217297418>');
                console.log(err);
            }
        } else {
            message.reply("i'm sorry, but you do not have the authority to kick members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }

    }
}