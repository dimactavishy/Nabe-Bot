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

  };