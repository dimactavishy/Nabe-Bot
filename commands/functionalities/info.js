module.exports = {
    name: 'info',
    cooldown: 30,
    description: "info embed",
    execute(client, message, args, Discord) {

        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#311129')
        .setTitle('Want to know more about me?')
        .setDescription("This one is a bot created for the sole purpose of aiding master's tasks. This one does not find greater joy other than serving thee.")
        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898837312291610645/sketch-1634369891230.png?width=499&height=499')
        .addFields(
            {name: 'Nabe is not a character of mine.', value: 'Nabe is a member of the Pleiades Maids from "Overlord". I do not own any rights to her, i simply base this bot off of her because i liked her as a character.' },
            {name: 'About the display picture.', value: "For this time being, her display picture is an edit of So-Bin's art. I'm looking for a more custom art, so feel free to submit your own submission." },
            {name: 'Best regards,', value:'Joko Sukino A.K.A Dimac.', inline: true},
            {name: 'Display picture:', value: '[Link to full size image](https://cdn.discordapp.com/attachments/898563395807232061/898860751035449344/narberal.png)', inline: true}

        )
        .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
        .setTimestamp();
    
    message.channel.send(infoEmbed);
    
    }
}