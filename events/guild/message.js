require('dotenv').config();

const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    if (message.author.bot) return;
  
    const prefix = message.content.includes("nabe ") ? "nabe " : "n!"
  
    if (message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  
    if(message.channel.type === "dm")return message.channel.send("I am not able to serve you in your private quarters.")
  
    if(cmd){
      cmd.execute(client, message, args, Discord);
    }else return

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < expiration_time) {
            const time_left = (expiration_time - current_time) / 1000;
            return message.reply(`I have to admit that i am not a perfect maid. So please, be patience and wait **${time_left.toFixed(1)}** more seconds before telling me to do ${command.name} again.`).then(msg => { msg.delete({ timeout: 7000 }) });
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    client.on("guildCreate", guild => {
  guild.roles.create({
    data: {
      name: 'Verified',
      color: '#808080',
    },
    reason: 'For verification',
    })
  guild.roles.create({
    data: {
      name: 'Muted',
      color: '#000000',
    },
    reason: 'For mute',
    })
  guild.roles.create({
    data: {
      name: 'Wibu',
      color: '#FF1493',
    },
    reason: 'For wibu',
    })
  const channels = guild.channels.cache.filter(channel => channel.type == "text");
  const setupEmbed = new Discord.MessageEmbed()
  .setColor('#610349')
  .setTitle('Thank you for inviting me to your guild.')
  .setDescription("This one will work as hard as she could to improve master's and his peer's experience on this guild.\n"
                  +"**Added 3 Roles for moderation and commands.**\n"
                  +"`Verified`"
                  +"`Muted`"
                  +"`Wibu`"
                  + "Feel free to change these role's settings, **but please do not delete or rename them unless you already have an identically named role.**"
  .setImage('https://cdn.discordapp.com/attachments/898563395807232061/909676455326253076/ysp1y2idard41_1.png')
  .setFooter("My prefix is `nabe` or `n!`. Pleased to be working with you!")
  .setTimestamp()
  channels.first().send(setupEmbed).catch(e => console.log(e));
});
  };
