require('dotenv').config();
const Discord = require('discord.js');
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    if (message.author.bot) return;
  
    const prefix = message.content.includes("nabe ") ? "nabe " : "n!"
  
    if (message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  
    if(message.channel.type === "dm")return message.channel.send("I am not able to serve you in your private quarters.")
  
    if(!cooldowns.has(cmd.name)){
        cooldowns.set(cmd.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(cmd.name);
    const cooldown_amount = (cmd.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            const waitEmbed = new Discord.MessageEmbed
            .setTitle(`I have to admit that i am not a perfect maid.`)
            .setDescription(`So please, be patient and wait **${time_left.toFixed(1)}** before telling me to do `${cmd.name}` again.`)
            return message.reply(waitEmbed).then(msg => { msg.delete({ timeout: 10000 }) });
        }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    
    if(cmd){
         try{
             cmd.execute(client, message, args, Discord);
             } catch (err){
                message.channel.send("I'm sorry, i think i made a mistake there...");
                console.log(err);
             }
    } else return


}
