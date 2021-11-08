module.exports = {
    name: 'verify',
    description: "Verify yourself.",
    execute(client, message, args, Discord) {


        let role = message.guild.roles.cache.find(r => r.name === "Verified");

        if(message.member.roles.cache.some(r => r.name === "Verified")){
            message.reply('sorry, but you have verified yourself in the past.');
        }else {
            message.reply('do you seek verification? There, you are verified now.');
            message.member.roles.add(role).catch(console.error);
        }
        
    }
}