const Discord = require('discord.js'); // Puxando a livraria Discord.js
const c = require('../config.json') // Puxando o conteúdo do arquivo config.json

exports.run = (client, message, args) => {

  message.delete()

    let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sugestao\` - Deixe uma sugestão para o servidor`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sugestao <sugestão>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sugestao Jogar minecraft\``)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .setColor('#8c0046')   
 
  var canal = client.channels.cache.get('804912896479199253')
  
  var sugestao = args.slice(0).join(' '); 
  if (!sugestao) {
    return message.reply(erro)
  } else {
      let embed = new Discord.MessageEmbed()
        .setTitle(`📩 CRAFTBOSS | SUGESTÕES`)
        .setDescription(`:bust_in_silhouette: Autor: ${message.author}\n\n:inbox_tray: Sugestão: ${sugestao}\n\n:thumbsup: Concordo :thumbsdown: Discordo | ✅ Aprovada :no: ❌`)
        .setColor('#61c700')
        .setThumbnail(message.author.avatarURL())
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
       
        canal.send(embed) // Enviando no canal a embed
        

        .then(function (msg) {
            msg.react("👍");
            msg.react("👎"); 
              message.reply(`sua sugestão foi enviada ao ${canal}! :mailbox_with_no_mail:`).then(msg => {
                message.delete({ timeout: 10000 })
              })
   })  
 }
}
exports.help = {
 name: 'sugestão',
 description: 'Envia uma sugestão para o canal de sugestões',
 category: 'Suporte',
    aliases: ['sugestão', 'sugestao']
}