module.exports = client => {
    const channelId = '950775472843804754' // channel
    const tragetchannelid = '' // rules and information channel

    client.on('guildMemberAdd', (member) => {
    console.log(member)


    const message = `Welcome <@${member.id}> to the server!`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
    })
}