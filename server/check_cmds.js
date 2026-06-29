const { REST, Routes } = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN || require('./bot_data.json').token;
const clientId = process.env.CLIENT_ID;

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        const commands = await rest.get(Routes.applicationCommands(clientId));
        console.log('Registered commands:');
        commands.forEach(c => console.log(`- ${c.name} (type: ${c.type})`));
    } catch (e) {
        console.error(e);
    }
})();
