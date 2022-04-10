const {SlashCommandBuilder, SlashCommandStringOption} = require('@discordjs/builders');
const {MessageEmbed, CommandInteractionOptionResolver, Message} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('This command sets up the bot'),
    
    async execute(interaction) {
        interaction.reply('This command currently does nothing. In the future it will setup the bot and let you sync channels')
    }
}

