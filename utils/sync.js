const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver, Message, WebhookClient, User } = require('discord.js');
const { serverOne, serverTwo } = require('../config.json') 


const syncMessage = (msg) => {
    const userPfp = msg.author.user.displayAvatarURL( {dynamic: true})
    const userName = msg.author.user.username
    const userContent = msg.content
    const channelid = msg.channelid

    const webhookOne = new WebhookClient({ url: `${serverOne.webhook}` });
    const webhookTwo = new WebhookClient({ url: `${serverTwo.webhook}`});

    if(channelid === serverOne.id){
        webhookOne.send({
            content: `${userContent}`,
            username: `${userName}`,
            avatarURL: `${userPfp}`
        })
    } else if (channelid === serverTwo.id){
        webhookTwo.send({
            content: `${userContent}`,
            username: `${userName}`,
            avatarURL: `${userPfp}`
        })
    } else {
        console.log('this message will not sync')
    }
}

module.exports = {syncMessage}