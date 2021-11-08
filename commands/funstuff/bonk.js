module.exports = {
    name: 'bonk',
    cooldown: 30,
    description: "bonk embed",
    execute(client, message, args, Discord) {
        
        const bonkEmbed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('B-but, It hurts, you know...')
        .setImage('https://media.discordapp.net/attachments/898563395807232061/898564781781422110/nabebonk.gif')
        .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
        .setTimestamp();
    
        message.channel.send(bonkEmbed);
    
    }
}