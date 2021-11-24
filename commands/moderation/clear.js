module.exports = {
    info: {
        name: "clear",
        description: "Clear messages on text channels. Messages older than 14 days cannot be deleted.",
        usage: "[amount (maximum is 99)]",
        cooldown: 0,
    },
    async execute(client, message, args, Discord) {
            if (!message.member.hasPermission("MANAGE_MESSAGES"))
                return message.reply("i'm sorry, but you do not have the authority to manage messages.").then(msg => { msg.delete({ timeout: 5000 }) });
            if (!args[0]) return message.reply("you need to specify how much messages you want to clear, master...").then(msg => { msg.delete({ timeout: 5000 }) });
            if (isNaN(args[0])) return message.reply("i'm afraid i do not understand. Please specify an actual number, master.").then(msg => { msg.delete({ timeout: 5000 }) });

            if (args[0] > 99) return message.reply("i beg forgiveness for my lack of abilities, but it's beyond my abilty to clear more than 99 messages.").then(msg => { msg.delete({ timeout: 5000 }) });
            if (args[0] < 1) return message.reply("forgive me, but specifying a number smaller than one would induce a paradox. So please, specify a greater number.").then(msg => { msg.delete({ timeout: 5000 }) });

            try {

                await message.channel.messages.fetch({ limit: ++args[0] }).then(messages => {
                    message.channel.bulkDelete(messages);
                    message.channel.send('Cleared the messages as you wished, master.').then(msg => { msg.delete({ timeout: 5000 }) });
                });

            } catch (err) {
                message.channel.send("I'm sorry, i think i made a mistake there...");
                console.log(err);
            }
    }
}