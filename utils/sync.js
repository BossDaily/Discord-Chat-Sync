const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver, Message} = require('discord.js');
const { serverOne, serverTwo } = require('../config.json') 


const syncMessage = (msg) => {
    const userPfp = msg.author.user.avatarURL()
    const userName = msg.author.user.username
    
}

export default syncMessage