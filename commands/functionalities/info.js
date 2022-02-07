module.exports = {
    info: {
        name: "info",
        description: "Information about me.",
        usage: "",
        cooldown: 10,
    },
    execute(client, message, args, Discord) {

        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#311129')
        .setTitle('Want to know more about me?')
        .setDescription("This one is a bot created for the sole purpose of aiding master's tasks. This one does not find greater joy other than serving thee.")
        .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898837312291610645/sketch-1634369891230.png?width=499&height=499')
        .addFields(
            {name: 'Nabe is not a character of mine.', value: 'Nabe is a member of the Pleiades Maids from "Overlord". I do not own any rights to her, i simply base this bot off of her because i liked her as a character.' },
            {name: 'About the display picture.', value: `Nabe's current display picture is from a page of ["The Undead Oh!"](https://overlordmaruyama.fandom.com/wiki/Overlord:_The_Undead_Oh!). If you have any submissions for the display picture you can contact me.`},
            {name: 'Best regards,', value:'Joko Sukino A.K.A Dimac.', inline: true},
            {name: 'Display picture:', value: `[Link to full image](https://cdn.discordapp.com/attachments/805416303870607360/940214184036167691/RDT_20220207_1806142589485760279220855.jpg)`, inline: true}

        )
        .setFooter('Egg-Shaped Battle Maid', client.user.displayAvatarURL())
        .setTimestamp();
    
    message.channel.send(infoEmbed);
    
    }
}
