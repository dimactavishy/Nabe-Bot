module.exports = {
    name: 'clear',
    description: "clears messages",
    async execute(client, message, args, Discord) {
        if (!message.content.includes('help')){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.reply("i'm sorry, but you do not have the authority to manage messages.").then(msg => { msg.delete({ timeout: 5000 })});
        if(!args[0]) return message.reply("you need to specify how much messages you want to clear, master...").then(msg => { msg.delete({ timeout: 5000 })});
        if(isNaN(args[0])) return message.reply("i'm afraid i do not understand. Please specify an actual number, master.").then(msg => { msg.delete({ timeout: 5000 })});

        if(args[0] > 99) return message.reply("i beg forgiveness for my lack of abilities, but it's beyond my abilty to clear more than 99 messages.").then(msg => { msg.delete({ timeout: 5000 })});
        if(args[0] < 1) return message.reply("forgive me, but specifying a number smaller than one would induce a paradox. So please, specify a greater number.").then(msg => { msg.delete({ timeout: 5000 })});

        await message.channel.messages.fetch({limit: ++args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.channel.send('Cleared the messages as you wished, master.').then(msg => { msg.delete({ timeout: 5000 })});
        });
    }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Clears messages from a channel.', '`nabe clear <amount>`')
                .setFooter('Example: nabe clear 10')
            message.channel.send(helpEmbed)
        }
    }
}