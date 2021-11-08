const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    cooldown: 20,
    description: 'check mc server',
    execute(client, message, args, Discord) {
        if (!message.content.includes('help')){
            if (!args[0]) return message.reply('i do not understand. Perhaps you are missing something called "IP"?').then(msg => { msg.delete({ timeout: 5000 }) });
        if (!args[1]) return message.reply('i... think you forgot to specify a port. My creator said the default is 25565?').then(msg => { msg.delete({ timeout: 5000 }) });

        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            const embed = new Discord.MessageEmbed()
                .setColor('#006400')
                .setTitle('Minecraft server status report?')
                .setDescription('Though i understand nothing about this "Minecraft" thing, these are the data that i could gather.')
                .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/899557824231800832/sketch-1634541670722.png?width=499&height=499')
                .addFields(
                    { name: 'Server IP', value: response.host },
                    { name: 'Online Players', value: response.onlinePlayers },
                    { name: 'Max Players', value: response.maxPlayers },
                    { name: 'Version', value: response.version }
                )
                .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
                .setTimestamp();

            message.channel.send(embed);

        })
            .catch((error) => {
                message.reply('apologies! I could not find the "Minecraft" server that you are looking for.').then(msg => { msg.delete({ timeout: 5000 }) });
                throw error;
            })
        }
        if (message.content.includes('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .addField('Returns a Minecraft server status.', '`nabe mcserver <ip> <port>`')
                .setFooter('Example: nabe mcserver nabemc.net 25565')
            message.channel.send(helpEmbed)
        }
    }
}