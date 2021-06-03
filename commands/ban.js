const Discord = require('discord.js');
const c = require('../config.json')

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`ban\` - Dê Ban em um usuário`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}ban @nomedousuario motivo\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}ban @! HighTGA#0118 spam\``)
  .addField(`:bookmark: **Permissão**`, `\`BAN_MEMBERS\``)
  .setColor('#8c0046')   

    //adicione o nome do cargo que vc quer que use esse comando!
    if(!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("Você não tem permissão para usar este comando!");
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member)
      return message.reply(erro);
    if(!member.bannable) 
      return message.reply("Eu não posso expulsar este usuário! Ele tem um cargo mais alto ou eu não tenho permissões de banir?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Razão não fornecida";
  
  let embedi = new Discord.MessageEmbed()

        .setTitle(`:warning: BaNiDo :warning:`)
        .setFooter(`Você foi banido do ${message.guild.name} pelo Staff: ${message.author.username}, Tenha um bom dia!`)
      
    await member.send(embedi)
    await member.ban(reason)
      .catch(error => message.reply(`${message.author} não consegui banir o membro devido o : ${error}`));
  
      let embed = new Discord.MessageEmbed()
        .setTitle("🚫 Rede Guardian | BANS", message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("📋Staff Tag", message.author, true)
        .addField("🚨Membro Tag", member, false)
        .addField("📝Motivo:", reason, true)
        .setColor("RANDOM").setTimestamp()
      
      client.channels.cache.get('847243661674807336').send(embed)
  }

  exports.help = {
    name: 'ban',
    description: 'Realiza um banimento no membro mencionado',
    category: 'Moderação',
    aliases: ['ban' ,'banir']
}
