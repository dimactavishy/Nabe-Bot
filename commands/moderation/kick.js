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

            if (!member.kickable) return message.reply("sorry, but the person you are trying to kick has a higher authority than me.").then(msg => { msg.delete({ timeout: 5000 }) });

            try {
                member.kick(reason)
                message.reply("done. I have kicked the fool who angered you out of this server.");
            } catch (err) {
                message.channel.send("I'm sorry, i think i made a mistake there...");
                console.log(err);
            }
        } else {
            message.reply("i'm sorry, but you do not have the authority to kick members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }

    }
}