const os = require('os');

module.exports = {
    info: {
        name: "status",
        description: "I will send an embed of my own status.",
        usage: "",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {
        var cpus;
        var thread;

        if (os.cpus() == "" && os.arch() == "arm64") {
            cpus = "Termux nodejs limitation API";
            thread = "Termux nodejs limitation API";
        }
        else {
            cpus = os.cpus()[0].model
            thread = os.cpus().length
        }
        let days = 0
        let week = 0
        let totalSeconds = (client.uptime / 1000)
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = Math.floor(totalSeconds % 60)
        if (hours > 24) {
            days = days + 1
            hours = 0
        }
        if (week - 0) {
            uptime += `${week} week, `
        }
        if (minutes > 60) {
            minutes = 0;
        }
        const statsEmbed = new Discord.MessageEmbed()
            .setColor('#311129')
            .setTitle("You want to know my current status?")
            .setDescription("Perhaps you want to know how long i've been working so far. Here's the current state that i'm in.")
            .addField(`OS`, `${os.type()}`, true)
            .addField(`Kernel Version`, `${os.release()}`, true)
            .addField(`Nodejs Version`, `${process.version}`, true)
            .addField(`CPU Name`, `${cpus}`, true)
            .addField(`Thread`, `${thread}`, true)
            .addField(`Arch`, `${os.arch()}`, true)
            .addField('Uptime', `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/907183712142241792/sketch-1636359819739.png?width=499&height=499')
            .setImage('https://64.media.tumblr.com/c8ee5f809e6d23c08f4e9e2b3253ebe7/tumblr_p6obq1FioC1tubau5o4_1280.jpg')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        await message.channel.send(statsEmbed);




    }
}