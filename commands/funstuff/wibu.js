module.exports = {
    info: {
        name: "wibu",
        description: "An inside joke between my friends. Command is in ID.",
        usage: "",
        cooldown: 10,
    },
    execute(client, message, args, Discord) {

        
        let role = message.guild.roles.cache.find(r => r.name === "Wibu");

        if(message.member.roles.cache.some(r => r.name === "Wibu")){
            message.reply('mencari wibu? <@580990284914229352>');
        }else {
            message.reply('selamat, kamu jadi wibu stress ;)');
            message.member.roles.add(role).catch(console.error);
        }
        
    }
}