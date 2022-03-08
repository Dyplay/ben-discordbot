const Discord = require("discord.js");
const client = new Discord.Client({ 
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS
  ]
})
const { BOT_TOKEN, Prefix } = require('./config.json');
const prefix = Prefix

client.once("ready", () => {
  console.log("Ready!");
});

const activities = [
  ".help to Start!",
  "Creator: Dyplay",
  "Hi i am Talking Ben!",
  `On ${client.guilds.cache.size} servers!`
];

client.on("ready", () => {
  // run every 10 seconds
  setInterval(() => {
    // generate random number between 1 and list length.
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];

    client.user.setActivity(newActivity);
  }, 10000);
});

client.on('message' , (msg) => {
  if(msg.content == prefix + `help` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setAuthor('Ben')
      .setTitle('Command list')
      .setDescription(`Requested By: ${msg.author.username}`)
      .addField(".help", "going to show you this page. (Showing you the help page) ")
      .addField(".credits ", "credits from the bot creator")
      .addField(".ben <message>", "tell something to ben.")
      .addField(".version", "show's you the bot's version!")
      .addField(".drink", "Ben will drink")
      .addField(".eat", "Ben will eat")
      .addField(".newspaper", "Ben will read the newspaper")
      .addField(".burp", "Ben will burp")
      msg.channel.send(embed)
  }

  if(msg.content == prefix + `version` && msg.guild && !msg.member.user.bot){
    var embed = new Discord.MessageEmbed()
    .setTitle("Talking Ben version")
    .setDescription("version: v0.1")
    .addField(`Requested by:`, `${msg.author.username}`)
    msg.channel.send(embed)
}

if(msg.content == prefix + `eat` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setImage("https://c.tenor.com/UZOcqAyMu4QAAAAd/talking-ben-eating.gif")
  .addField(`Requested by:`, `${msg.author.username}`)
  msg.channel.send(embed)
}

if(message.content == "ben") {
  message.reply("try it with ``.ben + your message`` ;D")
}

if(message.content == "Ben") {
  message.reply("try it with ``.ben + your message`` ;D")
}

if(msg.content == prefix + `invite` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setThumbnail('')
  .setTitle('Invite')
  .setDescription('Invite link: https://discord.com/api/oauth2/authorize?client_id=944657700606861372&permissions=414464661569&scope=bot')
  .addField(`Requested by:`, `${msg.author.username}`)
  msg.channel.send(embed)
}

if(msg.content == prefix + `credits` && msg.guild && !msg.member.user.bot){
var embed = new Discord.MessageEmbed()
.setThumbnail(`${client.user.displayAvatarURL()}`)
.setColor('#fc9607')
.setAuthor('ben')
.setTitle('credits')
.setDescription(` Programmer: Dyplay | 
His Server: https://discord.gg/paVRxtce78ups`)
.addField(`Requested by:`, `${msg.author.username}`)
.setFooter(`@zodclips - owner`)

msg.channel.send(embed)
}

if(msg.content == prefix + `drink` && msg.guild && !msg.member.user.bot){
var embed = new Discord.MessageEmbed()
.setImage("https://c.tenor.com/hdPVLfpe81cAAAAC/talking-ben-drinking.gif")
.addField(`Requested by:`, `${msg.author.username}`)
msg.channel.send(embed)
}

if(msg.content == prefix + `newspaper` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setColor('#fc9607')
  .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945748888793526272/Design_ohne_Titel.gif')
  .addField(`Requested by:`, `${msg.author.username}`)

  msg.channel.send(embed)
}

if(msg.content == prefix + `newspaper` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setColor('#fc9607')
  .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945748888793526272/Design_ohne_Titel.gif')
  .addField(`Requested by:`, `${msg.author.username}`)

  msg.channel.send(embed)
}
if(msg.content == prefix + `burp` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setColor('#fc9607')
  .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945765945908027412/Design_ohne_Titel7.gif')
  .addField(`Requested by:`, `${msg.author.username}`)

  msg.channel.send(embed)
}

if(msg.content == prefix + 'servers' && msg.guild && !msg.member.user.bot){
  const serverlist = new Discord.MessageEmbed()
  .setColor('#fc9607')
.setDescription(`I am currently on ${client.guilds.cache.size} servers!`)
  msg.channel.send(serverlist)
}

if(msg.content == prefix + `Burp` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setColor('#fc9607')
  .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945765945908027412/Design_ohne_Titel7.gif')
  .addField(`Requested by:`, `${msg.author.username}`)

  msg.channel.send(embed)
}

if(msg.content == prefix + `esfsesfsefse` && msg.guild && !msg.member.user.bot){
  var embed = new Discord.MessageEmbed()
  .setColor('#fc9607')
  .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945765945908027412/Design_ohne_Titel7.gif')
  .addField(`Requested by:`, `${msg.author.username}`)

  msg.channel.send(embed)
}
})

client.on('message', message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/);

  switch(args[0]) {
    case `ben`:
        rndMessage(message)

        function rndMessage(message) {
          var messages = [
            "Yes",
            "No",
            "Hahahah",
            "~ Hangs up ~",
            "~ Ugh ~"
          ]
          var rnd = Math.floor(Math.random() * messages.length);
        
          message.channel.send(messages[rnd]);
      }
    break;
  }
})

client.on('message', message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/);

  switch(args[0]) {
    case `Ben`:
        rndMessage(message)

        function rndMessage(message) {
          var messages = [
            "Yes",
            "No",
            "Hahahah",
            "~ Hangs up ~",
            "~ Ugh ~"
          ]
          var rnd = Math.floor(Math.random() * messages.length);
        
          message.channel.send(messages[rnd]);
      }
    break;
  }
})

client.login(BOT_TOKEN);