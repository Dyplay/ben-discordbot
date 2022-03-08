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
const { Message, MessageEmbed , messageCreate } = require('discord.js');
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

client.on('messageCreate', message => {
  if (message.content == "ben") {
    message.reply("try it with ``.ben + your message`` ;D")
  }
  
  if (message.content == "Ben") {
    message.reply("try it with ``.ben + your message`` ;D")
  }
})

client.on('messageCreate', message => {

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

client.on('messageCreate', message => {

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