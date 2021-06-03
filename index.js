const Discord = require("discord.js");
const config = require("./config.json"); 
const fs = require("fs"); 
const {readdirSync} = require('fs')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const cooldown = new Set();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
  
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} - Comando iniciado`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);        
  });
  });
  });

client.on('message', message => { // nome desse evento, foi setado como: message
  if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
  if (message.channel.type === "dm") return; // caso seja uma mensagem privada ao nosso bot, não retornaremos

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

  let prefix = prefixes[message.guild.id].prefixes;
  //let prefix = config.prefix; // puxando o prefixo do nosso bot
  var args = message.content.substring(prefix.length).split(" ");
   let cmd = args.shift().toLowerCase();
   if (!message.content.startsWith(prefix) || message.author.bot) return;

let command =
  client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
if (command) {
  command.run(client, message, args);
} 

if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { 
  message.delete() 
    .then(message.channel.send('Link Deletado:\n**Link de servidores não são permitidos!**'))
}

});

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`); 
    //client.user.setActivity(`ImpérioGeek\nBy: zKinG#6890`);
    //
    var tabela = [
      {name: 'Rede Guardian https://discord.gg/q6vx4tGkKj', type:'PLAYING'},
      {name: 'Criado por HighTGA#0118', type: 'LISTENING'},
      {name: 'https://discord.gg/q6vx4tGkKj', type: 'STREAMING', url: 'https://www.twitch.tv/hiightt'}
    ];
  
    function setStatus() {
      var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
      client.user.setActivity(altstatus)
    }
    setStatus();
    setInterval(() => setStatus(), 5000)
  });

client.on('guildMemberAdd', member => {

    const role = member.guild.roles.cache.get('847124784336863313') // that was to define the role to give newbies (you can name the variable however you want that doesn't matter!)
    member.roles.add(role)



    var canal1 = client.channels.cache.get("846566516349861902");
    var canal2 = client.channels.cache.get("847243661674807336");

    const message = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL())
    .setColor('#690420')
    .setAuthor('✨ Bem-vindo(a) a Rede Guardian!')
    .setTitle('Seja bem-vindo(a) ao nosso discord, se divirta e tire dúvidas!')
    .addFields(
        { name: '👋 Sabia que...', value: `Você é o ${member.guild.memberCount}° membro aqui no servidor?`, inline: true},
        { name: '🛡️ Tag do Usuário', value: `\`${member.user.tag}\``, inline: true },
        { name: '📛 Precisando de ajuda?', value: 'Caso você tenha alguma dúvida ou problema, chame alguém da staff ou vá ao <#847245971893387286>!', inline: true },
        { name: '👮 Evite punições!', value: `Leia as nossas <#846567543085727745> para evitar ser punido no servidor!`, inline: false }
    )
    .setFooter('2021 ©Rede Guardian')
    .setTimestamp()
    canal1.send(`${member}`, message)

    const join = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL())
    .setColor('#690420')
    .setAuthor('Um novo membro entrou no servidor!')
    .setDescription(`${member} acabou de entrar.`)
    .setFooter('2021 ©Rede Guardian')
    .setTimestamp()
    canal2.send(join)
})

client.on('messageReactionAdd', ( reaction, user ) => {
  if (user.bot) return;
  
  const guild = reaction.message.guild;
  const member = guild.members.cache.get(user.id);
  
  if (reaction.emoji.name == '🔴') member.roles.add('846575710285594674');
  if (reaction.emoji.name == '🔴') member.roles.remove('847124784336863313');
  if (reaction.emoji.name == '🔴') {
    let embedobg = new Discord.MessageEmbed()
    .setTitle('🌠 REDE GUARDIAN | Verificação')
    .setDescription('Obrigado por se verificar no nosso servidor!')
    .setColor('#690420')
    .setFooter('2021 ©Rede Guardian').setTimestamp()
    member.send(embedobg)
  }
  reaction.users.remove(member).catch(console.error)
  
  });

  const cdseconds = 5;

  client.on("messageReactionAdd", (reaction, member, user) => {
      if(member.bot) return;
      const message = reaction.message;
  
      if(
        ['💵', '⛔', '❓', '⚙️', '🔒'].includes(reaction.emoji.name)
      ) {
          switch(reaction.emoji.name) {
  
              case "💵":
              case "⛔":
              case "❓":
              case "⚙️":
        
        reaction.users.remove(member).catch(console.error)
  
              if(cooldown.has(member.id)) {
                return member.send("Aguarde um tempo para criar um novo ticket!")
              }
  
              var TicketList = [
                  "ticket-001",
                  "ticket-002",
                  "ticket-003",
                  "ticket-004",
                  "ticket-005",
                  "ticket-006",
                  "ticket-007",
                  "ticket-008",
                  "ticket-009",
                  "ticket-010",
                  "ticket-011",
                  "ticket-012",
                  "ticket-013",
                  "ticket-014",
                  "ticket-015",
                  "ticket-016",
                  "ticket-017",
                  "ticket-018",
                  "ticket-019",
                  "ticket-020"
              ]
  
              let result = Math.floor((Math.random() * TicketList.length))
  
              let categoryID = "847436200670134273";
  
              var bool = false;
  
              if(bool == true) return;
             
              message.guild.channels.create(TicketList[result]).then(chan => {
  
                console.log(`${TicketList[result]} Foi criado pelo ${member.username}`)
                 
                chan.setParent(categoryID);
                  
                    //Não verificado
            chan.updateOverwrite(message.guild.roles.cache.find(x => x.id === "847124784336863313"), {
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: false
                      })
                    //Membro
                    chan.updateOverwrite(message.guild.roles.cache.find(x => x.id === "846575710285594674"), {
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: false
                      })
                    //everyone
                    chan.updateOverwrite(message.guild.roles.cache.find(x => x.id === "846566516349861899"), {
                          SEND_MESSAGES: false,
                          VIEW_CHANNEL: false
                      })
                    //Equipe
                    chan.updateOverwrite(message.guild.roles.cache.find(v => v.id === "847439132467789844"), {
              VIEW_CHANNEL: true,
              READ_MESSAGE_HISTORY: true,
              SEND_MESSAGES: true
            })
            //Quem abriu
                    chan.updateOverwrite(message.guild.members.cache.get(member.id), {
                          SEND_MESSAGES: true,
                          ADD_REACTIONS: true,
                          ATTACH_FILES: true,
                          VIEW_CHANNEL: true,
                          READ_MESSAGE_HISTORY: true
                      })
  
                    chan.send(`A <@&847439132467789844> foi alertada, aguarde alguem para atende-lo`)
            
                    let embedTicketOpen = new Discord.MessageEmbed()
                    .setTitle(":clipboard: **Rede Guardian | Suporte**")
                    .setColor("#690420")
                    .setThumbnail(`${member.avatarURL()}`)
                    .addField('Solicitante:', `${member}`)
                    .addField('Motivo:', `${reaction.emoji.name}`)
                    .setFooter("Rede Guardian© Todos os direitos reservados.").setTimestamp()
  
                    cooldown.add(member.id)
                    setTimeout(() => {
                        cooldown.delete(member.id);
                    }, 300000);
  
                    chan.send(embedTicketOpen).then( async msg => {
              await msg.react("🔒")
                      })
                })
            
  
              break;
  
              case "🔒":
  
              message.channel.send("**A sala fecha em 10 segundos ...**")
  
              setTimeout(() => {
                  message.channel.delete()
                  cooldown.delete(member.id);
              }, cdseconds * 1500)
  
              let embedTicketClose = new Discord.MessageEmbed()
              .setTitle(`O Ticket ${message.channel.name} foi fechado`)
              .setColor("#690420")
              .setFooter("Aviso de fechamento de ticket")
  
              console.log(`${message.channel.name} foi finalizado`)
  
              break;
          }
      }
  })

client.login(config.token);