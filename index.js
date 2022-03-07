const Discord = require("discord.js");
const client = new Discord.Client();
const { BOT_TOKEN, BOT_OWNER_ID } = require('./config.json')
const prefix = "."

client.once("ready", () => {
  console.log("Ready!");
});

const activities = [
  ".help to Start!",
  "Creator: Dyplay",
  "Hi i am Talking Ben!",
  ``
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
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `version` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setTitle("Talking Ben version")
      .setDescription("version: v0.1")
      .addField(`Requested by:`, `${msg.author.username}`)
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `eat` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/UZOcqAyMu4QAAAAd/talking-ben-eating.gif")
      .addField(`Requested by:`, `${msg.author.username}`)
      msg.channel.send(embed)
  }
})

client.on('message' , (message) => {
  if(message.content == "ben") {
    message.reply("try it with ``.ben + your message`` ;D")
  }
})

client.on('message' , (message) => {
  if(message.content == "Ben") {
    message.reply("try it with ``.ben + your message`` ;D")
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `drink` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/hdPVLfpe81cAAAAC/talking-ben-drinking.gif")
      .addField(`Requested by:`, `${msg.author.username}`)
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `invite` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setThumbnail('')
      .setTitle('Invite')
      .setDescription('Invite link: https://discord.com/api/oauth2/authorize?client_id=944657700606861372&permissions=414464661569&scope=bot')
      .addField(`Requested by:`, `${msg.author.username}`)
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
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
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `newspaper` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945748888793526272/Design_ohne_Titel.gif')
      .addField(`Requested by:`, `${msg.author.username}`)

      msg.channel.send(embed)
  }
})


client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
      client.commands.get(command).execute(message, args);
  } catch (error) {
      console.error(error);
      message.reply('do not write it twice you dumb cookie.');
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `newspaper` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945748888793526272/Design_ohne_Titel.gif')
      .addField(`Requested by:`, `${msg.author.username}`)

      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `burp` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945765945908027412/Design_ohne_Titel7.gif')
      .addField(`Requested by:`, `${msg.author.username}`)

      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `Burp` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setImage('https://cdn.discordapp.com/attachments/902913431563284510/945765945908027412/Design_ohne_Titel7.gif')
      .addField(`Requested by:`, `${msg.author.username}`)

      msg.channel.send(embed)
  }
  if(msg.content == prefix + `servers` && msg.guild && !msg.member.user.bot){
    var embed = new Discord.MessageEmbed()
    .setColor('#fc9607')
    .setDescription(`i am currently on`)
    .addField(guild)
    .addField('servers!', '!')

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

client.login("OTQ0NjU3NzAwNjA2ODYxMzcy.YhEzCg.FoBSS4lf3XSIZp6_l6sa5XO1ckA");