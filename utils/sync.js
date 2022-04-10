const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver, Message, WebhookClient, User } = require('discord.js');
const { serverOne, serverTwo } = require('../config.json') 


const syncMessage = (msg) => {
    const userPfp = msg.member.displayAvatarURL({format: 'png'})
    const userName = msg.member.displayName
    const userContent = msg.content
    const channelid = msg.channelId.toString()

    const webhookOne = new WebhookClient({ url: `${serverOne.webhook}` });
    const webhookTwo = new WebhookClient({ url: `${serverTwo.webhook}`});

    if(channelid === serverOne.channel){
        webhookTwo.send({
            content: `${userContent}`,
            username: `${userName}`,
            avatarURL: `${userPfp}`
        })

        console.log(userPfp)
    } else if (channelid === serverTwo.channel){
        webhookOne.send({
            content: `${userContent}`,
            username: `${userName}`,
            avatarURL: `${userPfp}`
        })
        console.log(userPfp)
    } else {
        console.log('this message will not sync')
        
    }
}

module.exports = {syncMessage}