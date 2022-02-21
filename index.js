const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity('talk to me', { type: 'PLAYING' })
});

client.on('message' , (msg) => {
  if(msg.content == prefix + "credits" && msg.guild && !msg.member.user.bot){
      var embed = new Discord.MessageEmbed()
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
          ]
          var rnd = Math.floor(Math.random() * messages.length);
        
          message.channel.send(messages[rnd]);
      }
    break;
  }
})

client.login("OTQ0NjU3NzAwNjA2ODYxMzcy.YhEzCg.FoBSS4lf3XSIZp6_l6sa5XO1ckA");