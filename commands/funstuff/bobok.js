module.exports = {
    name: 'bobok',
    description: "command bobok",
    execute(client, message, args, Discord) {
        
        if(message.author.id === '291847323217297418') {
            message.reply('bobok yang nyenyak, master.');
        } if(message.author.id === '466787710955290634') {
            message.channel.send('omg telur bisa bobok');
        } else {
            message.reply('lu bau');
        }

    }
}
