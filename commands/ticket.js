const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor("#690420")
    .setDescription(":clipboard: **Rede Guardian** | **Verificação**\n\n :dollar: • Para duvidas relacionadas a nossa loja\n :no_entry: • Para relatar algum problema\n :question: • Dúvidas em geral sobre o servidor\n :gear: • Outros")
    .setImage('https://cdn.discordapp.com/attachments/845727475249577985/846373009622040616/Suporte.png')
    .setFooter("O seu ticket será criado na categoria de suporte após a reação.")

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("💵")
        msg.react("⛔")
        msg.react("❓")
        msg.react("⚙️")

    })
}

exports.help = {
    name: "ticket",
    description: 'Cria a mensagem do ticket',
    category: 'Sistema',
    aliases: []
}