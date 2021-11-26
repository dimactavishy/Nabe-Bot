module.exports = {
    info: {
        name: "bonk",
        description: "Bonks me. Try it.",
        usage: "",
        cooldown: 25,
    },
    execute(client, message, args, Discord) {
        
        const bonkEmbed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('B-but, It hurts, you know...')
        .setImage('https://media.discordapp.net/attachments/898563395807232061/898564781781422110/nabebonk.gif')
        .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
        .setTimestamp();
    
        message.channel.send(bonkEmbed);
    
    }
}