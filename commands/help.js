const Discord = require("discord.js");

exports.run = (client, message, args) => { 
    const embed = {
        color: 0xB1103C,
        title: 'Minha lista de comandos',
        description: '[Clique aqui para ir até o repositório onde estou =)](https://github.com/Liga-dos-Programadores/Project-A)',
        timestamp: new Date(),
        footer: {
          text: 'CraftBoss - Oficial©'
        },
        fields: []
      }
    

    let commands = client.commands

    if (message.member === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => !c.help.admin)

    commands.forEach(command => {
      if (command.alias) return
        embed.fields.push({
        name: `**!${command.help.name}**`,
        value: `*Descrição*: ${command.help.description}
        *Categoria*: ${command.help.category}\n`
      })
    })

    message.author.send({
      embed: embed
    })
      .then(() => message.react('⚡'))
      .catch(() => message.reply('eu não tenho permissões para enviar DM para você 😥'))

    message.channel.send(embed)

}

exports.help = {
    name: 'ajuda',
    description: 'Fornece os comandos do bot',
    category: 'Info',
    aliases: ['help']
}