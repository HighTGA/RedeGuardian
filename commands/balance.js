const Discord = require("discord.js");
const { match } = require("../functions.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {
    message.delete()

    let user = message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    match(args.join(" ").toLowerCase(), message.guild) || 
    message.author;
  
    let bal = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`);
    if (bal === null) bal = 0;
  
    let bank = await client.db.fetch(`money_${message.guild.id}_${user.id}.bank`);
    if (bank === null) bank = 0;
  
    let TotalMoney = bank + bal;
  
    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**${user}'s Balance**\n
    **Pocket:** ${bal}
    **Bank:** ${bank}
    **Total:** ${TotalMoney}`);
    message.channel.send(moneyEmbed)

}

exports.help = {
    name: 'saldo',
    description: 'Mostra o seu saldo',
    category: 'Econômia',
    aliases: []
  }