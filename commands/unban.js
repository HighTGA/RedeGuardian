const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    
    let reason = args.slice(1).join(' ');
    let user = args[0];
    if (!reason) return message.reply('Você não deu um motivo para desbanir.')
    if (!user) return message.reply('Você precisa me dar um ID ou Mencionar um membro para desbanir.').catch(console.error);
    message.guild.members.unban(user)

    let embed = new Discord.MessageEmbed()
        .setTitle("🚫 Rede Guardian | BANS", message.author.avatarURL())
        .setDescription('Usúario desbanido!')
        .setThumbnail(message.author.avatarURL())
        .addField("🚨Membro Desbanido", `<@${args[0]}>`)
        .addField("📝Motivo:", reason)
        .addField('Data:', message.createdAt.toLocaleString())
        .setColor("RANDOM").setTimestamp()

        client.channels.cache.get('847243661674807336').send(embed)
}
exports.help = {
    name: 'unban',
    description: 'Desbani o membro mencionado/fornecer o id',
    category: 'Moderação',
    aliases: ['unban', 'desbanir']
}