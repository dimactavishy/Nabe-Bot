module.exports = {
    name: 'bobok',
    description: "command bobok",
    execute(client, message, args, Discord) {
        
        let role = message.guild.roles.cache.find(r => r.name === "dimac", "egg");
        if (message.member.roles.cache.some(r => r.name === "dimac")) {
            message.reply('bobok yang nyenyak, master.');
        } else if (message.member.roles.cache.some(r => r.name === "egg")) {
            message.channel.send('omg telur bisa bobok');
        } else {
            message.reply('lu bau');
        }

    }
}