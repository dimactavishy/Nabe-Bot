module.exports = {
    name: 'leave',
    description: 'leave voice channel',
    async execute(client, message, args, Discord) {

        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.reply("you have to be in a voice channel first to order me to leave.").then(msg => { msg.delete({ timeout: 5000 }) });
        await voiceChannel.leave();
        await message.channel.send("I'll gladly play music for you again, master!")
    message.react("✅")
 
    }
}