module.exports = {
    info: {
        name: "bobok",
        description: "An inside joke between my creator's friends. Command is in ID.",
        usage: "",
        cooldown: 5,
    },
    execute(client, message, args, Discord) {
        
        if(message.author.id === '291847323217297418') {
            message.reply('bobok yang nyenyak, master.');
        } else if(message.author.id === '466787710955290634') {
            message.channel.send('omg telur bisa bobok');
        } else {
            message.reply('lu bau');
        }

    }
}
