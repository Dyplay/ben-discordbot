const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."

client.once("ready", () => {
  console.log("Ready!");
});

const activities = [
  ".help to Start!",
  "Creator: Dyplay",
  "Hi i am Talking Ben!"
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
  if(msg.content == prefix + "credits" && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setTitle("Invite")
      .setDescription("")

      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `help` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setColor('#fc9607')
      .setAuthor('ben')
      .setTitle('Command list')
      .addField(".help | going to show you this page. (Showing you the help page) ")
      .addField(".credits | credits from the bot creator")
      .addField(".ben <message> | tell something to ben.")
      .addField(".version | show's you the bot's version!")
    
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `eat` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setTitle("Talking Ben version")
      .setDescription("version: v0.1")
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `eat` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/UZOcqAyMu4QAAAAd/talking-ben-eating.gif")
      msg.channel.send(embed)
  }
})

client.on('message' , (message) => {
  if(message.content.startsWith == "ben") {
    message.reply("try it with ``.ben # your message`` ;D")
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `ben drink` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/hdPVLfpe81cAAAAC/talking-ben-drinking.gif")
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `ben drink` && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
      .setImage("https://c.tenor.com/hdPVLfpe81cAAAAC/talking-ben-drinking.gif")
      msg.channel.send(embed)
  }
})

client.on('message' , (msg) => {
  if(msg.content == prefix + `credits` && msg.guild && !msg.member.user.bot){
    let avatarUrl = user.displayAvatarURL()
      var embed = new Discord.MessageEmbed()
      .setThumbnail(`${avatarUrl}`)
      .setColor('#fc9607')
      .setAuthor('ben')
      .setTitle('credits')
      .setDescription(` Programmer: Dyplay | 
      His Server: https://discord.gg/paVRxtce78ups`)
      .setFooter(`@zodclips - owner`)

      msg.channel.send(embed)
  }
})


client.on('message', message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/);

  switch(args[0]) {
    case 'ben':
        rndMessage(message)

        function rndMessage(message) {
          var messages = [
            "Yes",
            "No",
            "Hahahah",
            "~ Hangs up ~",
            "~ eeeehhhhwww ~"
          ]
          var rnd = Math.floor(Math.random() * messages.length);
        
          message.channel.send(messages[rnd]);
      }
    break;
  }
})

client.login("OTQ0NjU3NzAwNjA2ODYxMzcy.YhEzCg.FoBSS4lf3XSIZp6_l6sa5XO1ckA");