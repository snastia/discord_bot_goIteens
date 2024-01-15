const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Some description"),
    async execute(interaction) {
        await interaction.reply("Hello!");
    },
};