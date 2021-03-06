module.exports = {
    info: {
        name: "invite",
        description: "Invite me to your server.",
        usage: "",
        cooldown: 10,
    },
    execute(client, message, args, Discord) {

        const inviteEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('You can click here to invite me to your server.')
        .setURL('https://discord.com/oauth2/authorize?client_id=897674562265817088&scope=bot&permissions=8589934591')
        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/901798967271108618/sketch-1635076002354.png?width=499&height=499')
        .addField('Unfortunately, for now, i am still in development.', 'Expect frequent errors and restarts.')
        .setImage('https://i.redd.it/j2f593rq8cn41.jpg')
        .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
        .setTimestamp();
        
        message.channel.send(inviteEmbed);
    }
}