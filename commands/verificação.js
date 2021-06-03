const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    message.delete()

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Apenas quem tem perm pode criar a mensagem de verificação`);

    message.reply(`Digite a mensagem que vai ficar na embed de verificação.`).then(msg3 => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1}) 
        .on('collect', c => {
            let mensagem = c.content

            message.channel.bulkDelete(2)

    let aaaaa = new Discord.MessageEmbed()
    .setColor("#61C700")
    .setDescription(mensagem)
    .setFooter(`Rede Guardian - Oficial©`)
    message.channel.send(aaaaa).then(async msg => {
        msg.react("🔴")

})
})
})
}

exports.help = {
    name: 'verificação',
    description: 'Mensagem do sistema de verificação',
    category: 'Sistema',
    admin: true,
    aliases: []
}