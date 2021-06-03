const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete()

    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites()
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv <= 0) {
        return message.channel.send(`${user} não convidou ninguém!`)
    }

    let invCodes = userInv.map(x => x.code).join(' ')
    let i = 0
    userInv.forEach(inv => i += inv.uses)

    const embed = new Discord.MessageEmbed()
    .setTitle(`${user.username} Invites`)
    .setDescription(`**Número de invites:** ${i}\n**Códigos de invites:** ${invCodes}`)
    .setColor('#b716ff')
    message.channel.send(embed)

}

exports.help = {
    name: 'invites',
    description: 'Mostra quantos invites você tem',
    category: 'Info',
    aliases: ['invite']
  }