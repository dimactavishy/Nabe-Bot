module.exports = {
    info: {
        name: "ban",
        description: "Ban a user from the guild.",
        usage: "[usermention] [optional reason]",
        cooldown: 0,
    },
    execute(client, message, args, Discord) {

        if (message.member.hasPermission('BAN_MEMBERS')) {
            let member = message.mentions.members.first();
            if (!member) return message.reply("mention the fool who dares anger my master, and i will erase that person as soon as possible.").then(msg => { msg.delete({ timeout: 5000 }) });

            let reason = args.slice(1).join(" ");
            if (!reason) reason = 'No reason has been given.';

            if (!member.bannable) return message.reply("sorry, but the person you are trying to ban has a higher authority than me.").then(msg => { msg.delete({ timeout: 5000 }) });

            try {
                member.ban(reason)
                message.reply("Even insects smell good when roasted.");
            } catch (err) {
                message.channel.send("I'm sorry, i think i made a mistake there...");
                console.log(err);
            }
        } else {
            message.reply("i'm sorry, but you do not have the authority to ban members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }

    }
}