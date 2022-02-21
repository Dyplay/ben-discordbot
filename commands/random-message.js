var testmessages = ["message one", "message two", "message three", "message four"]

module.exports = {
    name: 'random',
    description: "",
    execute(message, args){
        var testrandomform = testmessages[Math.floor(Math.random()*testmessages.length)];
        message.channel.send(testrandomform).then().catch(console.error);
    }
}