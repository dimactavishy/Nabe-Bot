const Discord = require("discord.js")

module.exports = {
    info: {
        name: "help",
        description: "A help for those who doesn't know.",
        usage: "[command]",
        cooldown: 10,
    },
    async execute(client, message, args, Discord) {

        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds += "``" + client.config.prefix + cmdinfo.name + " " + cmdinfo.usage + "`` ~ " + cmdinfo.description + "\n"
        })

        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Seeking Help?')
            .setDescription('These are the commands categories that i currently know of, be aware that i am currently improving and will probably learn more in the future.\n\n'
                + '**Please select one of these menus down below:**\n\n'
                + '**1️** - Functionality\n'
                + '**2️** - Moderation\n'
                + '**3️** - Search\n'
                + '**4️** - Music\n'
                + '**5️** - Imageboard\n'
                + '**6️** - NSFW\n'
                + '**7️** - Fun Stuff\n\n'
                + 'This message will be deleted in 1 minute.'
            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const functionalityEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Functionality Commands')
            .setDescription('These are the commands under the functionality category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**help** - Sends the help embed.\n'
                + '**support** - Sends the support embed.\n'
                + '**info** - Sends the information embed.\n'
                + '**invite** - Sends the bot invite link.\n'
                + '**verify** - Verifies a user. ("Verified" role needed)\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'

            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const moderationEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Moderation Commands')
            .setDescription('These are the commands under the moderation category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**ban** - Bans a user from the guild.\n'
                + '**kick** - Kicks a user from the guild.\n'
                + '**clear** - Clears a specified amount of messages.\n'
                + '**mute** - Mutes a user in text channels.\n'
                + '**unmute** - Unmutes a user in text channels.\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'

            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const searchEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Search Commands')
            .setDescription('These are the commands under the search category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**anime** - Returns an anime entry from MyAnimeList\n'
                + '**mcserver** - Returns an Minecraft server status.\n'
                + '**pic** - Returns an image based on a query (disabled)\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'

            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const musicEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Music Commands')
            .setDescription('These are the commands under the music category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**play** - Adds song to queue.\n'
                + '**skip** - Skips song that is currently playing.\n'
                + '**stop** - Stops playing the song and clears queue.\n'
                + '**queue** - Sends the embed queue.\n'
                + '**nowplaying** - Shows what song is currently playing.\n'
                + '**pause** - Pause the current song.\n'
                + '**resume** - Resumes the paused song. (broken)\n'
                + '**volume** - Adjusts queue volume.\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'

            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const imageboardEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Imageboard Commands')
            .setDescription('These are the commands under the imageboard category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**booru** - Returns an image from Gelbooru. Tags are optional.\n'
                + '**boorusafe** - Returns an image from Safebooru. Tags are optional.\n'
                + '**baka** - Returns a "baka" image/GIF.\n'
                + '**slap** - Returns a slapping image/GIF.\n'
                + '**tickle** - Returns a tickling image/GIF.\n'
                + '**feed** - Returns a feeding image/GIF.\n'
                + '**cuddle** - Returns a cuddling image/GIF.\n'
                + '**kiss** - Returns a kissing image/GIF.\n'
                + '**pet** - Returns a petting image/GIF.\n'
                + '**poke** - Returns a poking image/GIF.\n'
                + '**hug** - Returns a hugging image/GIF.\n'
                + '**kemono** - Returns an image/GIF of a kemonomimi/animal ears.\n'
                + '**neko** - Returns an image/GIF of a catgirl/neko.\n'
                + '**kitsune** - Returns an image/GIF of a foxgirl/kitsune.\n'
                + '**catgirl** - Returns an image of a neko with "GECG" text.\n'
                + '**smug** - Returns a smug image/GIF.\n'
                + '**waifu** - Returns a randomly-generated waifu image.\n'
                + '**pfp** - Returns a random avatar/PFP image. (`lewd` is optional.)\n'
                + '**wallpaper** - Returns a wallpaper image.\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'

            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const nsfwEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('NSFW Commands')
            .setDescription('These are the commands under the NSFW category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**paheal** - Returns an image from Rule34.paheal. Tags are optional.\n'
                + '**r34** - Returns an image from Rule34.xxx. Tags are optional.\n'
                + '**hentai** - Returns random hentai image.\n'
                + '**ahegao** - Returns an ahegao image.\n'
                + '**hkitsune** - Returns a lewd foxgirl image/GIF.\n'
                + '**hboobs** - Returns a lewd booba image/GIF.\n'
                + '**hblowjob** - Returns a blowjob image/GIF.\n'
                + '**hkemono** - Returns a lewd image/GIF of a girl with animal ears.\n'
                + '**hketa** - Returns a (mostly lewd) image by ke-ta(artist).\n'
                + '**hsolo** - Returns a n image of a girl doing lewd things alone.\n'
                + '**htrap** - Returns a lewd trap image/GIF.\n'
                + '**hfuta** - Returns a lewd futanari image/GIF.\n'
                + '**hyuri** - Returns a an image of two girls doing lewd stuff.\n'
                + '**hfeet** - Returns a lewd feet image/GIF.\n'
                + '**hneko** - Returns a lewd catgirl image/GIF.\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'

            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();

        const funstuffEmbed = new Discord.MessageEmbed()
            .setColor('#20124d')
            .setTitle('Random "Fun Stuff" Commands')
            .setDescription('These are the commands under the random category that i currently know of.\n\n'
                + '**Use the commands as `nabe <command>`**\n\n'
                + '**bonk** - Bonks me.\n'
                + '**ping** - Just a normal "Ping-Pong" command.\n'
                + '**bobok** - Sleep well. (Command is in ID)\n'
                + '**wibu** - Gains the "Wibu" role. (Command is in ID)\n\n'
                + '**Use `nabe help <command>` for more info.**\n\n'
            )
            .setThumbnail('https://media.discordapp.net/attachments/898563395807232061/898834471518896138/sketch-1634369214306.png?width=499&height=499')
            .setFooter('Egg-Shaped Battle Maid', 'https://images-ext-2.discordapp.net/external/l7-PY5Kkvta4_p-sOE0ftwQCmJ9iAe72eMPSTczuWi0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/897674562265817088/e36ef03370367a4b3cd51b864e9df392.png?width=499&height=499')
            .setTimestamp();


        if (!args[0]) message.channel.send(helpEmbed).then(embedMessage => {
            embedMessage.delete({ timeout: 60000 });
            const helpFilter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            embedMessage.react("1️⃣")
                .then(() => embedMessage.react("2️⃣"))
                .then(() => embedMessage.react("3️⃣"))
                .then(() => embedMessage.react("4️⃣"))
                .then(() => embedMessage.react("5️⃣"))
                .then(() => embedMessage.react("6️⃣"))
                .then(() => embedMessage.react("7️⃣"))
                .then(() => {
                    embedMessage.awaitReactions(helpFilter, { max: 1, time: 120000 }).then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === '1️⃣') {
                            message.author.send({ embed: functionalityEmbed })
                        }
                        if (reaction.emoji.name === '2️⃣') {
                            message.author.send({ embed: moderationEmbed })
                        }
                        if (reaction.emoji.name === '3️⃣') {
                            message.author.send({ embed: searchEmbed })
                        }
                        if (reaction.emoji.name === '4️⃣') {
                            message.author.send({ embed: musicEmbed })
                        }
                        if (reaction.emoji.name === '5️⃣') {
                            message.author.send({ embed: imageboardEmbed })
                        }
                        if (reaction.emoji.name === '6️⃣') {
                            message.author.send({ embed: nsfwEmbed })
                        }
                        if (reaction.emoji.name === '7️⃣') {
                            message.author.send({ embed: funstuffEmbed })
                        }

                    })
                })
        })
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if (!command) command = client.commands.find(x => x.info.aliases.includes(cmd))
            if (!command) return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
                .setTitle("Yes! I will teach you how to use this command.")
                .setColor("YELLOW")
                .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Cooldown: \`\`${command.info.cooldown} seconds\`\`
`)
            message.channel.send(commandinfo)
        }
    }
}
