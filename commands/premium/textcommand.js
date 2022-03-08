const { Command } = require("reconlx");
const { MessageEmbed } = require("discord.js");
const ee = require("../../settings/embed.json");
const config = require("../../settings/config.json");

module.exports = new Command({
  // options
  name: "ping",
  description: `Show Bot Ping`,
  userPermissions: ["SEND_MESSAGES"],
  category: "Information",
  premium: true,
  // command start
  run: async ({ client, interaction, args }) => {
    interaction.followUp({
      embeds: [new MessageEmbed().setTitle(`Ping :- ${client.ws.ping}`)],
    });
  },
});