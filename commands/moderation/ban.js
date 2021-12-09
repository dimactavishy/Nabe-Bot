const { MessageEmbed, MessageMentions } = require("discord.js");

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

            let guild = message.guild

            if (!member.bannable) return message.reply("sorry, but the person you are trying to ban has a higher authority than me.").then(msg => { msg.delete({ timeout: 5000 }) });

            let banEmbed = new Discord.MessageEmbed()
            .setTitle('Goodbye.')
            .setColor('YELLOW')
            .setDescription(`_You have been banned from **\`${guild.name}\`** for the following reason:_\n`
            + `**\`\`\`${reason}\`\`\`**`
            )
            .setTimestamp()

            try {
                member.ban().then(() => {
                    member.send(banEmbed).catch(() => {message.reply("the user has a closed DM.")}).then(msg => { msg.delete({ timeout: 5000 }) })
                })
                message.channel.send("Even insects smell good when roasted.");
            } catch (err) {
                client.channels.cache.get(`918459447142141973`).send(err.message);
                client.channels.cache.get(`918459447142141973`).send('<@291847323217297418>');
                console.log(err);
            }

        } else {
            message.reply("i'm sorry, but you do not have the authority to ban members.").then(msg => { msg.delete({ timeout: 5000 }) });
        }

    }
}
