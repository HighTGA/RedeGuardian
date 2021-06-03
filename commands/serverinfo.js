const Discord = require('discord.js')
const moment = require("moment");
moment.locale('pt-BR') 

exports.run = (client, message, args) => { 
    
    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    function checkBots(guild) { 
        let botCount = 0;
        guild.members.cache.forEach(member => { 
            if (member.user.bot) botCount++; 
        });
        return botCount;
    }

    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if (!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    let embed = new Discord.MessageEmbed()
        .setTitle('🔍 Informações do servidor')
        .setDescription(`📄 __**Nome**__: ${message.guild.name}\n👑 __**Dono do Server**__: ${message.guild.owner.user.id}\n🏳️ __**Região**__: :flag_br: Brasil\n👦 __**Membros**__: ${message.guild.members.cache.size}\n🤖 __**Bots**__: ${checkBots(message.guild)}\n🎲 __**Canais**__: ${message.guild.channels.cache.size}\n
        🧩 __**Cargos**__: ${message.guild.roles.cache.size}\n🔧 __**Criado em**__: \`${moment(message.guild.createdAt).format("LLL")}\`\n 🎟️ __**Entrou aqui em**__: \`${moment(membro.joinedAt).format("LLL")}\``)
        .setThumbnail(message.guild.iconURL())
        .setColor("#000000").setTimestamp()

        message.channel.send(embed)
};

exports.help = {
    name: "serverinfo",
    description: 'Fornece informações sobre o servidor do discord',
    category: 'Info',
    aliases: ['serverinfo', 'server']
}