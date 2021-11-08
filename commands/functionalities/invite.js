module.exports = {
    name: 'invite',
    description: "invite command.",
    execute(client, message, args, Discord) {

        const inviteEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('You can click here to invite me to your server.')
        .setURL('https://discord.com/oauth2/authorize?client_id=897674562265817088&scope=bot&permissions=8589934591')
        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/901798967271108618/sketch-1635076002354.png?width=499&height=499')
        .addField('Unfortunately, for now, i am still in development.', 'Expect frequent errors and restarts.')
        .setImage('https://i.redd.it/j2f593rq8cn41.jpg')
        .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
        .setTimestamp();
        
        message.channel.send(inviteEmbed);
    }
}