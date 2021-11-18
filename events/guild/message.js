require('dotenv').config();

const cooldowns = new Discord.Collection();

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

 if (!cooldowns.has(command)) {
    cooldowns.set(command, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command);
  const cooldownAmount = 1 * 60 * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(`i am not a perfect maid, so please wait ${timeLeft.toFixed(1)} more second(s) before using the \`${command}\` command again.`).then(msg => { msg.delete({ timeout: 5000 }) });
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  switch (command) {
    default:
      message.reply(`i'm sorry, but i do not recognize the \`${command}\` command.`);
  }
});
