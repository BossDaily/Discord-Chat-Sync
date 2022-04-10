const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver, Message, WebhookClient, WebhookClient} = require('discord.js');
const { serverOne, serverTwo } = require('../config.json') 


const syncMessage = (msg) => {
    const userPfp = msg.author.user.avatarURL()
    const userName = msg.author.user.username

    const webhookOne = new WebhookClient({ url: `` });
    const webhookTwo = new WebhookClient({ url: ``});
}

export default syncMessage